import React, { Component } from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {
    renderIngredients() {
        const allRecipes = recipeOfTheDay.ingredients.map((post, index) => {
            return (
                <Ingredient ingredient={post} key={index} />
            )
        })
        return allRecipes;
    };

    render() {
        return (
            <div>
                <h1 className="title">Recipe of the Day</h1>
                <h2>{recipeOfTheDay.name}</h2>
                <h2>Description</h2>
                <h2>{recipeOfTheDay.description}</h2>
                <h2>Ingredient</h2>
                {this.renderIngredients()}
            </div>
        );
    }
}
