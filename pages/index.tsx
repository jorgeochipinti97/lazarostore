import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { dataIPhones } from '../iphones';
import Marquee from "react-fast-marquee";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Layout } from '../components/layout';
import { useEffect, useState } from 'react';
import { FullScreenLoading } from '../components/ui'
import { format, formattwo } from '../utils/formater';
import AppleIcon from '@mui/icons-material/Apple';



const Home: NextPage = () => {
  const [data, setData] = useState(true)

  useEffect(() => {
    const interval_ = setInterval(() => {
      setData(false)
      clearInterval(interval_)
    }, 800)


  }, [])
  return (
    <>
      {
        data
          ? <FullScreenLoading />
          :
          <Layout title='Lazaro Store'>
            <Grid container sx={{ backgroundColor: 'black' }}>
              <Grid item xs={12} md={6} justifyContent="flex-end">
                <div data-aos="fade-down-right">
                  <Box display='flex' justifyContent='center'>
                    <Typography sx={{ fontFamily: 'Anton', textAlign: 'center', m: 5, overflowY: 'hidden' }} variant='h3'>
                      IMPOTADORES DIRECTOS
                      <AppleIcon sx={{ ml: 2, fontSize: 50 }} />
                    </Typography>
                  </Box>
                  <Box display='flex' justifyContent='center' alignItems='center' >
                    <Typography sx={{ fontFamily: 'Anton', textAlign: 'center', overflowY: 'hidden' }} variant='h3'>
                      TESTER <br /> & <br /> CAJA SELLADA
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1, backgroundColor: 'white' }} />
                  <Box>
                    <Typography sx={{ textAlign: 'center', m: 2 }} variant='h4'>
                      NO DUDES EN CONSULTAR NUESTRO STOCK
                    </Typography>
                    <Box display='flex' justifyContent='center'>
                      <Button sx={{ color: 'whitesmoke', border: '1px solid white', m: 3 }} variant='outlined' >
                        <WhatsAppIcon sx={{ fontSize: 50, m: 1 }} />
                      </Button >
                      <Button sx={{ color: 'white', border: '1px solid white', m: 3 }} variant='outlined' >
                        <InstagramIcon sx={{ fontSize: 50, m: 1 }} />
                      </Button>
                      <Button sx={{ color: 'white', border: '1px solid white', m: 3 }} variant='outlined' >
                        <EmailOutlinedIcon sx={{ fontSize: 50, m: 1 }} />
                      </Button>
                    </Box>
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
                  dataIPhones.map(e => (
                    <>
                      <Card sx={{ m: 1 }}>
                        <CardContent>
                          <CardMedia>
                            <Image src={e.image} alt={e.name} width={190} height={300} />
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
                    </>
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
              <Grid item xs={12} md={6}>
                <div data-aos="zoom-out-left">
                  <Box display='flex' justifyContent='center'>
                    <Image src='https://res.cloudinary.com/dhu16ubcp/image/upload/v1662744830/www.apple.com_794_macbook_pro_13__e3r46kd69eoi_large_2x_muh5g4.jpg' alt='' width={1662} height={860} />
                  </Box>
                </div>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} md={6} sx={{ backgroundColor: 'white' }}>
                <div data-aos="fade-left">
                  <Box>
                    <Box display='flex' flexDirection='column' alignItems='center' >
                      <Box display='flex' justifyContent='center' >
                        <Box sx={{ p: 1, m: { xs: 0, md: 2, lg: 2, xl: 2 }, mb: { xs: 1 }, borderRadius: '9px' }} >
                          <Typography variant='h5' sx={{ color: 'black', m: 1, textAlign: 'center' }}>¡Consulta por tus productos favoritos!</Typography>
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
                              label='¿Qué  estás buscando?'
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
            </Grid>


            <Grid container sx={{ backgroundColor: 'black' }}>
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
                          <Typography variant='h5' sx={{ color: 'black', m: 1, mb: 3, textAlign: 'center' }}>¡Anotate en el PRE-SALE del IPhone 14!</Typography>
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
          </Layout>
      }
    </>

  )
}

export default Home
