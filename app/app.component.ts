import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
    <div class="container">
      <div class="well">
       <h1>Add an Animal</h1>
       <h3>{{currentFocus}}</h3>
       <form>
          <label>Specie</label>
          <input type="text"></input>
          <hr>
          <label>Name</label>
          <input type="text"></input>
          <hr>
          <label>Age</label>
          <input type="text"></input>
          <hr>
          <label>Diet</label>
          <input type="text"></input>
          <hr>
          <label>Location</label>
          <input type="text"></input>
          <hr>
          <label>Caretakers</label>
          <input type="text"></input>
          <hr>
          <label>Sex</label>
          <input type="text"></input>
          <hr>
          <label>Likes</label>
          <input type="text"></input>
          <hr>
          <label>Dislikes</label>
          <input type="text"></input>
          <hr>
        </form
      </div>
   </div>
  `
})
