import React, { Component } from 'react';


class Recipe extends Component {

    render() {
        const recipe = this.props.recipe;
        // console.log(recipe);
        return (
            <div>
                <p>Name: {recipe.name}</p>
                <p>Servings: {recipe.servings}</p>
                <p>Category: {recipe.category}</p>
            </div>
        )
        }
    }

        export default Recipe;