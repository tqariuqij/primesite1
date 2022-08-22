import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import serviceData from '../data/index/services.json';
import projectData from '../data/index/projects.json';
import Ser from '../components/Service/Ser';
import Pr from '../components/Project/Pr';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
export default function Home(props) {
  return (
    <div className={styles.container}>
      <div className={styles.home_section_1}>
        <div className={styles.home_section_1_container}>
          <Stack direction='column' sx={{ alignItems: 'center' }} spacing={2}>
            <Typography
              variant='h2'
              gutterBottom
              component='div'
              fontWeight={700}
              sx={{ lineHeight: 1 }}
            >
              Launch faster with
              <br />
              <Typography
                variant='h2'
                component='div'
                fontWeight={700}
                color='primary'
                sx={{
                  background:
                    '-webkit-linear-gradient(45deg, #0bdb64, #08A44B)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                no code!
              </Typography>
            </Typography>

            <Typography
              variant='subtitle1'
              gutterBottom
              component='div'
              color='#424242'
              sx={{
                textAlign: 'center',
                maxWidth: 600,
                alignSelf: 'center',
              }}
            >
              We&apos;re a talented team of developers ready to take on your
              next big idea. We use bubble.io to develop amazing websites and
              digital products for startups, companies and ourselves. Want to
              work with an awesome team and build your product? Let&apos;s talk!
            </Typography>
            <Link href='/projects'>
              <Button
                size='small'
                variant='contained'
                disableElevation
                sx={{ borderRadius: 2 }}
              >
                Explore Our Work
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
      <div className={styles.home_section_2}>
        <div className={styles.home_section_2_container}>
          <Typography variant='h4' gutterBottom component='div'>
            What you can build?
          </Typography>

          <div className={styles.services_container}>
            {props.services.map((service) => (
              <Ser service={service} key={service._id.toString()} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.home_section_3}>
        <div className={styles.home_section_3_container}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='h4' gutterBottom component='div'>
              Our work
            </Typography>
            <Link href='/projects'>
              <Typography
                variant='body1'
                gutterBottom
                sx={{ cursor: 'pointer' }}
              >
                See more 👉
              </Typography>
            </Link>
          </Stack>

          <div className={styles.our_work_container}>
            {props.projects.map((project) => (
              <Link
                href={`/project/${project._id}`}
                key={project._id.toString()}
              >
                <a>
                  <Pr project={project} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.home_section_4}>
        <div className={styles.home_section_4_container}>
          <Stack direction='column' alignItems='center'>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'center' }}>
              <FiberManualRecordRoundedIcon
                sx={{ color: '#08A44B', height: '20px', width: '20px' }}
              />
              <Typography
                color='text.primary.300'
                fontWeight={300}
                variant='body2'
              >
                AVAILABLE FOR FREELANCE PROJECTS
              </Typography>
            </Stack>

            <Typography
              textAlign='center'
              variant='h2'
              gutterBottom
              component='div'
              fontWeight={700}
            >
              Need help with your
              <br />
              <Typography
                variant='h2'
                gutterBottom
                component='div'
                fontWeight={700}
                sx={{
                  background:
                    '-webkit-linear-gradient(45deg, #0bdb64, #08A44B)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Bubble project?
              </Typography>
            </Typography>
            <Link href='https://calendly.com/primedevs/bubble-development'>
              <Button
                size='small'
                variant='contained'
                disableElevation
                sx={{ borderRadius: 2, display: 'inline-block' }}
              >
                Schedule a Call
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  if (!projectData) {
    return {
      notFound: true,
    };
  }
  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: projectData, services: serviceData }, // will be passed to the page component as props
  };
}
