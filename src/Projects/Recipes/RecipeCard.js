import * as React from 'react';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  background: 'green',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Recipe = styled.div`
  position: relative;
  height: 28rem;
  width: 20rem;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;
`;

const RecipeImage = styled.img`
  height: 20rem;
  width: 20rem;
`;

const RecipeTitle = styled.div`
  color: black;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0 .25rem;
`;

const RecipeCategory = styled.div`
  color: rgba(0, 0, 0, .75);
  font-size: 1rem;
  padding: 0 .25rem;
`;

const RecipeFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25rem;
  position: absolute;
  bottom: 0;
`;

const ViewRecipeButton = styled(Button)`
  && {
   margin-right: .5rem;
  }
`;

function RecipeCard(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <>
        <Recipe>
          <RecipeImage src={props.recipe.img}/>
          <RecipeTitle>{props.recipe.title}</RecipeTitle>
          <RecipeCategory>{props.recipe.category}</RecipeCategory>
          <RecipeFooter>
            <Rating readOnly name="half-rating" defaultValue={props.recipe.rating} precision={0.5}/>
            <ViewRecipeButton variant="contained" onClick={handleOpen}>View Recipe</ViewRecipeButton>
          </RecipeFooter>
        </Recipe>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={ModalStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default RecipeCard;