import CallIcon from '@material-ui/icons/Call'
import Divider from '@material-ui/core/Divider'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import CSIEIcon from 'src/res/image/relate/NCKU-CSIE.png'
import FooterStyle from 'src/style/Footer.module.scss'
import NCKUIcon from 'src/res/image/relate/NCKU.png'
import materialUIIcon from 'src/res/image/tech/material-ui.svg'
import reactIcon from 'src/res/image/tech/react.png'
import sassIcon from 'src/res/image/tech/sass.png'
import webpackIcon from 'src/res/image/tech/webpack.svg'

export default function Footer() {
  return (
    <Grid
      className={FooterStyle['footer-section']}
      container>
      <Grid
        className={FooterStyle['footer-powered-by']}
        item xs={12} sm={6} md={3} lg={2} xl={2}>
        <List>
          <ListItem>
            <h2 className={FooterStyle['footer-powered-by-title']}>
              Powered By
            </h2>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-powered-by-item']}
              href='https://reactjs.org/'>
                <img
                  className={FooterStyle['footer-powered-by-item-image']}
                  src={reactIcon} />
                <Typography className={FooterStyle['footer-powered-by-item-name']}>
                  REACT
                </Typography>
              </Link>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-powered-by-item']}
              href='https://webpack.js.org/'>
                <img
                  className={FooterStyle['footer-powered-by-item-image']}
                  src={webpackIcon} />
                <Typography className={FooterStyle['footer-powered-by-item-name']}>
                  WEBPACK
                </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-powered-by-item']}
              href='https://material-ui.com/'>
                <img
                  className={FooterStyle['footer-powered-by-item-image']}
                  src={materialUIIcon} />
                <Typography className={FooterStyle['footer-powered-by-item-name']}>
                  MATERIAL-UI
                </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-powered-by-item']}
              href='https://sass-lang.com/'>
                <img
                  className={FooterStyle['footer-powered-by-item-image']}
                  src={sassIcon} />
                <Typography className={FooterStyle['footer-powered-by-item-name']}>
                  SASS
                </Typography>
            </Link>
          </ListItem>
          <Divider className={FooterStyle['footer-powered-by-divider']} />
        </List>
      </Grid>
      <Grid
        className={FooterStyle['footer-related']}
        item xs={12} sm={6} md={3} lg={2} xl={2}>
        <List>
         <ListItem>
           <h2 className={FooterStyle['footer-related-title']}>
             Related Link
           </h2>
         </ListItem>
         <ListItem>
            <Link
              className={FooterStyle['footer-related-item']}
              href='https://web.ncku.edu.tw/index.php'>
              <img
                className={FooterStyle['footer-related-item-image']}
                src={NCKUIcon} />
              <Typography className={FooterStyle['footer-related-item-name']}>
                National Cheng Kung University
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-related-item']}
              href='http://www.csie.ncku.edu.tw/ncku_csie/'>
              <img
                className={FooterStyle['footer-related-item-image']}
                src={CSIEIcon} />
              <Typography className={FooterStyle['footer-related-item-name']}>
                Department of Computer Science and Information Engineering
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={FooterStyle['footer-related-item']}
              href='https://github.com/IKMLab' >
              <GitHubIcon
                className={FooterStyle['footer-related-item-image']} />
              <Typography className={FooterStyle['footer-related-item-name']}>
                Intelligent Knowledge Management Laboratory
              </Typography>
            </Link>
          </ListItem>
          </List>
      </Grid>
      <Grid
        className={FooterStyle['footer-contact']}
        item xs={12} sm={6} md={3} lg={2} xl={2}>
        <Divider className={FooterStyle['divider']} />
        <List>
          <ListItem>
            <CallIcon />
            <Link
              className={FooterStyle['contact']}
              href='tel:+88662757575,62520,2903'>
              <Typography className={FooterStyle['contact-text']}>
              +886-6-275-7575 ext 62520 ext 2903
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <EmailIcon />
            <Link
              className={FooterStyle['contact']}
              href='mailto:ikmlab@mail.csie.ncku.edu.tw'>
              <Typography className={FooterStyle['contact-text']}>
              ikmlab@mail.csie.ncku.edu.tw
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}