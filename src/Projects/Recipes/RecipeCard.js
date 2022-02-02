import * as React from 'react';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';

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

  function handleSelectRecipe() {
    console.log('Recipe Selected');

    props.onRecipeSelected(props.recipe);
  }

  return (
      <Recipe>
        <RecipeImage src={props.recipe.img}/>
        <RecipeTitle>{props.recipe.title}</RecipeTitle>
        <RecipeCategory>{props.recipe.category}</RecipeCategory>
        <RecipeFooter>
          <Rating readOnly name="half-rating" defaultValue={props.recipe.rating} precision={0.5}/>
          <ViewRecipeButton variant="contained" onClick={handleSelectRecipe}>View Recipe</ViewRecipeButton>
        </RecipeFooter>
      </Recipe>
  );
}

export default RecipeCard;