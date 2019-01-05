import React, { Component } from 'react';

import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {

    renderRecipes() {
        const allRecipes = recipes.map((post, index) => {
            return (
                <Recipe recipe={post} key={index} />
            )
        })
        return allRecipes;
    }
    render() {
        return (
            <div>
                <h1>Recipes</h1>
                {this.renderRecipes()}
            </div>
        )
    }
}

export defult Recipes;