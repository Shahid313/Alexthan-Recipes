document.getElementById("addIngredientField").addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'ingredients');
    input.setAttribute('placeholder', 'Enter ingredient');
    input.required = true;
    var ingredientparent = document.getElementById("ingredientDiv");
    ingredientparent.appendChild(input);

});

// Steps Field

document.getElementById("addStepsField").addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'steps');
    input.setAttribute('placeholder', 'Enter step');
    input.required = true;
    var parent = document.getElementById("stepsDiv");
    parent.appendChild(input);

});