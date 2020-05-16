import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useToasts } from 'react-toast-notifications';


import { format } from 'date-fns';

import { desativarItem } from '../../services/api'

export default function RecipeReviewCard(props) {

  const { data } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const { addToast } = useToasts();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const formatDescription = (descricao) => {
    if(descricao.length > 100){
      descricao = descricao.substring(0, 100) + '...';
    }

    return descricao;
  }

  const submitRequest = async (id) => {
    const request = await desativarItem(id);
    (request.status === 200) ? addToast(request.data.message, { appearance: 'success' }) : addToast(request.data.message, { appearance: 'error' });
    setTimeout(()=> { 
      window.location.reload();
      handleCloseDialog();
    }, 1000);
  }

  return (
    <>
      <Card style={{height: '100%'}}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={<IconButton aria-label="settings" onClick={handleClick}><MoreVertIcon /></IconButton>}
          title={<Link to={{ pathname: `/item/detail/${data._id}`, state: { id: data._id } }}>{data.titulo}</Link>}
          subheader={format(new Date(data.createAt),'dd/MM/yyyy')}
        />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to={{ pathname: `/item/detail/${data._id}`, state: { id: data._id } }}>
              <MenuItem onClick={handleClose}>Ver</MenuItem>
            </Link>
            <Link to={{ pathname: `/item/edit/${data._id}`, state: { id: data._id } }}>
              <MenuItem onClick={handleClose}>Editar</MenuItem>
            </Link>
          
            <MenuItem onClick={handleClickOpenDialog}>Desativar</MenuItem>
            
          </Menu>
        <Link to={{
          pathname: `/item/detail/${data._id}`,
          state: {
            id: data._id
          }
        }}>
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {formatDescription(data.descricao)}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>    

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Deseja desativar este item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {data.titulo}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog} color="secondary">
            Cancelar
          </Button>
          <Button onClick={() => {submitRequest(data._id)}} color="primary" autoFocus>
            Desativar
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}