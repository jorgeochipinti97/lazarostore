import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { Box, Button, capitalize, Card, CardActions, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, ListItem, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import { DriveFileRenameOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AddOutlined } from '@mui/icons-material';
import { IProduct } from '../../../interfaces/IProduct';
import { lazaroApi } from '../../../api';
import { dbProducts } from '../../../database';
import Product from '../../../models/Product';


interface FormData {
    _id?: string;
    name: string;
    slug: string;
    images: string[];
    price: number;
}


interface Props {
    product: IProduct
}

const ProductsPage: NextPage<Props> = ({ product }) => {
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm<FormData>({
        defaultValues: product
    })

    useEffect(() => {
        try {
            const subscription = watch((value, { name, type }) => {
                if (name === 'name') {
                    const newSlug = value.name?.trim()
                        .replaceAll(' ', '_')
                        .replaceAll("'", '')
                        .toLocaleLowerCase() || '';

                    setValue('slug', newSlug);
                }
            });
            return () => subscription.unsubscribe();
        }
        catch (err) {
            alert(err)
        }
    }, [watch, setValue])


    const onSubmit = async (form: FormData) => {

        setIsSaving(true);

        try {
            const { data } = await lazaroApi({
                url: '/products',
                method: form._id ? 'PUT' : 'POST',  // si tenemos un _id, entonces actualizar, si no crear
                data: form
            });

            console.log({ data });
            if (!form._id) {
                router.replace(`/admin/products/${form.slug}`);
            } else {
                setIsSaving(false)
            }


        } catch (error) {
            console.log(error);
            setIsSaving(false);
        }

    }

    const onSubmitDelete = async (form: FormData) => {


        try {
            const { data } = await lazaroApi({
                url: '/products',
                method: 'DELETE',
                data: form
            });
            router.replace(`/admin/products/`);
        } catch (error) {
            console.log(error);

        }

    }


    const onDeleteImage = (image: string) => {
        setValue(
            'images',
            getValues('images').filter(img => img !== image),
            { shouldValidate: true }
        );
    }

    const onFilesSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (!target.files || target.files.length === 0) {
            return;
        }

        try {

            for (const file of target.files) {
                const formData = new FormData();
                formData.append('file', file);
                const { data } = await lazaroApi.post<{ message: string }>('/upload', formData);
                setValue('images', [...getValues('images'), data.message], { shouldValidate: true });
            }

        } catch (error) {
            console.log({ error });
        }
    }

    return (
        <>
            <Box sx={{ backgroundColor: 'white', height: '150vh' }}>
                {router.asPath == '/admin/products/new' ? null :

                    <Box display='flex' justifyContent='end' sx={{ mb: 2 }}>
                        <Button
                            startIcon={<AddOutlined />}
                            color="secondary"
                            href="/admin/products/new"
                        >
                            Crear Nuevo Producto
                        </Button>
                    </Box>}

                <Box display={router.asPath == '/admin/products/new' ? 'none' : 'flex'} justifyContent='center' flexDirection='column'>
                    <Button
                        color="error"
                        startIcon={<DeleteForeverIcon />}

                        sx={{ width: '150px', mb: 2 }}
                        onClick={handleSubmit(onSubmitDelete)}
                    >
                        Borrar Producto
                    </Button>
                    <TextField
                        label="introduzca el nombre para eliminar correctamente"
                        variant="filled"

                        sx={{ mb: 3, width: '300px' }}
                        {...register('name', {
                            required: 'Este campo es requerido',
                            minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                        })}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </Box>
                <Divider sx={{ my: 1 }} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box display='flex' justifyContent='end' sx={{ mb: 1 }}>
                        <Button
                            color="secondary"
                            startIcon={<SaveOutlined />}
                            sx={{ width: '150px' }}
                            type="submit"
                            disabled={isSaving}
                        >
                            Guardar
                        </Button>
                    </Box>
                    <Grid container spacing={2} >
                        {/* Data */}
                        <Grid item xs={12} sm={12} >
                            <Box display='flex' justifyContent='center'>

                                <TextField
                                    label="Título"
                                    variant="filled"

                                    sx={{ mb: 1 }}
                                    {...register('name', {
                                        required: 'Este campo es requerido',
                                        minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                                    })}
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <Box display='flex' justifyContent='center'>

                                <TextField
                                    label="Precio"
                                    type='number'
                                    variant="filled"
                                    sx={{ mb: 1 }}
                                    {...register('price', {
                                        required: 'Este campo es requerido',
                                        min: { value: 0, message: 'Mínimo de valor cero' }
                                    })}
                                    error={!!errors.price}
                                    helperText={errors.price?.message}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <Box display='flex' justifyContent='center'>

                                <TextField
                                    label="Slug - URL"
                                    variant="filled"
                                    sx={{ mb: 1 }}
                                    {...register('slug', {
                                        required: 'Este campo es requerido',
                                        validate: (val) => val.trim().includes(' ') ? 'No puede tener espacios en blanco' : undefined
                                    })}
                                    error={!!errors.slug}
                                    helperText={errors.slug?.message}
                                />
                            </Box>
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Grid item xs={12} sm={12} >

                            <Box display='flex' justifyContent='center'>
                                <Box display='flex' flexDirection="column" sx={{ height: '70vh' }}>

                                    <Button
                                        color="secondary"
                                        variant='outlined'
                                        startIcon={<UploadOutlined />}
                                        sx={{ m: 3 }}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        Cargar imagen
                                    </Button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        accept='image/png, image/gif, image/jpeg'
                                        style={{ display: 'none' }}
                                        onChange={onFilesSelected}
                                    />


                                    <Grid container spacing={2} >


                                        {
                                            getValues('images').map(img => (
                                                <Grid item xs={4} sm={3} key={img} >
                                                    <Card>
                                                        <CardMedia
                                                            component='img'
                                                            className='fadeIn'
                                                            image={img}
                                                            alt={img}
                                                        />
                                                        <CardActions>
                                                            <Button
                                                                fullWidth
                                                                color="error"
                                                                onClick={() => onDeleteImage(img)}
                                                            >
                                                                Borrar
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
                                            ))
                                        }

                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </form >
            </Box >
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug = '' } = query;

    let product: IProduct | null;

    if (slug === 'new') {
        const tempProduct = JSON.parse(JSON.stringify(new Product()));
        delete tempProduct._id;
        tempProduct.images = ['https://res.cloudinary.com/djk4q3tys/image/upload/v1662561369/lt3dmuf3e9oauajsipoe.jpg', 'https://res.cloudinary.com/djk4q3tys/image/upload/v1662561757/qtnnxdgg5diy6tfdu5ww.jpg'];
        product = tempProduct;

    } else {
        product = await dbProducts.getProductBySlug(slug.toString());
    }

    if (!product && product != undefined || product == null) {
        return {
            redirect: {
                destination: '/admin/products',
                permanent: false,
            }
        }
    }


    return {
        props: {
            product,
        }
    }
}


export default ProductsPage