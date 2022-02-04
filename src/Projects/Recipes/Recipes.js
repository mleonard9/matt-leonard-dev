import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';
import recipes from './RecipeData.json';
import { InputAdornment, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const RecipeGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 2rem;
  padding-top: 2rem;
`;

const RecipeHeader = styled.div`
  justify-content: center;
  text-align: center;
`;

const PageTitle = styled.h1`
  color: black;
`;

const FilterBar = styled.div`
`;

const RecipeSearch = styled(TextField)`
  && {
   width: 20rem;
  }
`;

function Recipes() {
  const [searchValue, setSearchValue] = React.useState('');
  // const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  // const [showRecipe, setShowRecipe] = React.useState(false);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };


    return (
        <>
          <RecipeHeader>
          <PageTitle>Recipes</PageTitle>
          <FilterBar>
            <RecipeSearch 
              id="outlined-basic" 
              label="Search" 
              variant="outlined"
              value={searchValue}
              onChange={handleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }} />
          </FilterBar>
        </RecipeHeader>
        <RecipeGrid>
        {
          recipes.filter(recipe => recipe.title.includes(searchValue)).map((recipe, key)=> 
          <RecipeCard key={key} recipe={recipe}/>
          )
        }
      </RecipeGrid>
      </>
    );
}

export default Recipes;
