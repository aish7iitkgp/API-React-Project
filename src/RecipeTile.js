import React from 'react'

export default function RecipeTile( { recipe }) {
  return (
    <div className="recipetile">
        <img src={recipe["recipe"]["image"]} alt="" />
      <p>{recipe["recipe"]["label"]}</p>
    </div>
  )
}
