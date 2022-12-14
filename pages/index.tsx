import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Link, TextField, Typography } from '@mui/material'
import { NextPage, GetStaticProps } from 'next';
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Layout } from '../components/layout';
import { useEffect, useState } from 'react';
import { FullScreenLoading } from '../components/ui'
import { format, formattwo } from '../utils/formater';
import AppleIcon from '@mui/icons-material/Apple';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { dbProducts } from '../database';
import { IProduct } from '../interfaces';


interface Props {
  products: IProduct[]
}


const Home: NextPage<Props> = ({ products }) => {
  const [data, setData] = useState(true)

  useEffect(() => {
    const interval_ = setInterval(() => {
      setData(false)
      clearInterval(interval_)
    }, 800)

    console.log(products)

  }, [])
  return (
    <>
      {
        data
          ? <FullScreenLoading />
          :
          <Layout title='Lazaro Store'>
            <Grid container sx={{ backgroundColor: 'black' }}>
              <Grid item xs={12} md={6} justifyContent="flex-end" sx={{ mb: 2 }}>
                <div data-aos="fade-down-right">
                  <Box display='flex' justifyContent='center'>
                    <Typography sx={{ fontFamily: 'Anton', textAlign: 'center', pb: 3, pt: 3, overflowY: 'hidden' }} variant='h3'>
                      IMPOTADORES DIRECTOS
                      <AppleIcon sx={{ ml: 2, fontSize: 50 }} />
                    </Typography>
                  </Box>
                  <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography sx={{ fontFamily: 'Anton', textAlign: 'center', overflowY: 'hidden' }} variant='h3'>
                      TESTER <br /> & <br /> CAJA SELLADA
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6} justifyContent="flex-end">
                <div data-aos="fade-down-left">
                  <Image src={'https://res.cloudinary.com/dhu16ubcp/image/upload/v1662689753/fondo_en0qsj.png'} alt={'celu'} width={1500} height={1000} />
                </div>
              </Grid>
            </Grid>
            <div data-aos="zoom-in-right">

              <Marquee
                gradient={false}
              >
                {
                  products && products.map(e => (

                    <Card sx={{ m: 1 }} key={e.name}>
                      <CardContent>
                        <CardMedia>
                          <Image src={e.images[0]} alt={e.name} width={190} height={300} />
                        </CardMedia>
                        <Box display='flex' justifyContent='center'>
                          <Typography variant='subtitle1'>{e.name}</Typography>
                        </Box>
                        <Box display='flex' justifyContent='center' sx={{ pt: 2 }}>
                          <Button color='success' variant='contained'>
                            <Typography variant='body1' color='success' >{format(e.price)} </Typography>
                          </Button>
                        </Box>
                        <Divider sx={{ mt: 1 }} />
                      </CardContent>
                    </Card>

                  ))
                }
              </Marquee>
            </div>
            <Grid container sx={{ backgroundColor: 'black' }}>
              <Grid item xs={12} md={6}>
                <div data-aos="zoom-out-right">
                  <Box display='flex' justifyContent='center'>
                    <Image src='https://res.cloudinary.com/dhu16ubcp/image/upload/v1662745055/www.apple.com_371_ipad_pro_hero__bh3eq6sqfjw2_medium_2x_ap5s2u.jpg' alt='' width={1662} height={860} />
                  </Box>
                </div>
              </Grid>
              <Grid item
                xs={12} md={6} sx={{ backgroundColor: { xs: 'white', md: 'black' }, overflowY: 'hidden', }}>
                <div data-aos="zoom-out-left" >
                  <Box>
                    <Typography sx={{ textAlign: 'center', m: 2, fontFamily: 'Anton', overflowY: 'hidden', color: { xs: 'black', md: 'white' } }} variant='h4'>
                      ??No olvides seguirnos y consultar nuestro stock!
                    </Typography>
                  </Box>
                  <Box>
                    <Box display='flex' justifyContent='center'>
                      <Button sx={{ color: { xs: 'black', md: 'white' }, border: { xs: '1px solid black', md: '1px solid white' }, m: 3 }} variant='outlined' >
                        <WhatsAppIcon sx={{ fontSize: 30, m: 1 }} />
                      </Button >
                      <Button sx={{ color: { xs: 'black', md: 'white' }, border: { xs: '1px solid black', md: '1px solid white' }, m: 3 }} variant='outlined' >
                        <InstagramIcon sx={{ fontSize: 30, m: 1 }} />
                      </Button>
                      <Button sx={{ color: { xs: 'black', md: 'white' }, border: { xs: '1px solid black', md: '1px solid white' }, m: 3 }} variant='outlined' >
                        <EmailOutlinedIcon sx={{ fontSize: 30, m: 1 }} />
                      </Button>
                    </Box>
                  </Box>
                  <Box display='flex' justifyContent='center' sx={{ mb: 2 }}>
                    <Box display='flex' alignItems='center'>
                      <Typography variant='h5' sx={{ color: { xs: 'black', md: 'white' } }} alignSelf='end'>Nos encontramos en Zona Sur</Typography>
                      <LocationOnIcon sx={{ color: 'red', fontSize: 35 }} />
                    </Box>
                  </Box>
                </div>
                <iframe width="100%" height="100%" frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=Monte%20grande+()&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

              </Grid>
              <Grid item xs={12} md={6} sx={{ backgroundColor: 'white' }}>
                <div data-aos="fade-left">
                  <Box>
                    <Box display='flex' flexDirection='column' alignItems='center' >
                      <Box display='flex' justifyContent='center' >
                        <Box sx={{ p: 1, m: { xs: 0, md: 2, lg: 2, xl: 2 }, mb: { xs: 1 }, borderRadius: '9px' }} >
                          <Typography variant='h5' sx={{ color: 'black', m: 1, textAlign: 'center' }}>??Consulta por tus productos favoritos!</Typography>
                          <Typography variant='body2' sx={{ color: '#3C3A3A', m: 1, mb: 3, textAlign: 'center' }}>{'( IPad, Macbook, Apple Watch... )'}</Typography>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }}>
                            <TextField
                              label='Nombre'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }}>
                            <TextField
                              label='Email'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }} >
                            <TextField
                              label='Celular'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }} >
                            <TextField
                              label='??Qu??  est??s buscando?'
                              multiline
                              rows={4}
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ mt: 3 }}>
                            <Button variant='contained' color='success'>Enviar</Button>
                          </Box>
                        </Box>
                      </Box>

                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ backgroundColor: 'white' }}>
                <div data-aos="fade-right">
                  <Box display='flex' justifyContent='center'>
                    <Image src='https://res.cloudinary.com/dhu16ubcp/image/upload/v1662745641/www.apple.com_327_ipad_10_2__7yowwyyrbmaa_medium_m52jth.jpg' alt='' width={509} height={490} />
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6} justifyContent="flex-end">
                <div data-aos="zoom-in">
                  <Image src={'https://res.cloudinary.com/dhu16ubcp/image/upload/v1662685688/iphone_14_pro__bdluirpa1ele_large_elpdxf.jpg'} alt={'celu'} width={640} height={485} />
                </div>
              </Grid>
              <Grid item xs={12} md={6} justifyContent="flex-end">
                <div data-aos="zoom-in">
                  <Box>
                    <Box display='flex' flexDirection='column' alignItems='center' >
                      <Box display='flex' justifyContent='center' >
                        <Box sx={{ p: 1, m: { xs: 0, md: 2, lg: 2, xl: 2 }, mb: { xs: 1 }, backgroundColor: 'white', borderRadius: '9px' }} >
                          <Typography variant='h5' sx={{ color: 'black', m: 1, mb: 3, textAlign: 'center' }}>??Anotate en el PRE-SALE del IPhone 14!</Typography>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }}>
                            <TextField
                              label='Nombre'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }}>
                            <TextField
                              label='Email'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ m: 3 }} >
                            <TextField
                              label='Celular'
                            />
                          </Box>
                          <Box display='flex' justifyContent='center' sx={{ mt: 3 }}>
                            <Button variant='contained' color='success'>Enviar</Button>
                          </Box>
                        </Box>
                      </Box>

                    </Box>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Layout >
      }
    </>

  )
}


export const getStaticProps: GetStaticProps = async () => {

  const products: IProduct[] = await dbProducts.getAllProducts();

  if (!products) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 24
  }
}

export default Home
