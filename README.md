<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    
    <title>Our Menu </title>
  <style>
  * {
  box-sizing: border-box;
  }
div1,div2,div3 {
     font-family: Helvetica;
     font-size: 16px;
  background-color: gray;
  padding: 0px 10px 10px 10px;
  margin:  10px;

  }
section {text-align: right; border-left: 1px solid black; border-bottom: 1px solid black; margin:  0;font-size: 20px;

}

  .chicken {background-color: pink; font-weight: bolder;
  }
  .beef {background-color: red;font-weight: bolder}
  .sushi {background-color: yellow;font-weight: bolder}
  .row {
  
}

/********** Large devices only **********/
@media (min-width: 992px) {div1,div2,div3{float: left; border: 1px solid black}
div1{width: 31%;}
div2{width: 31%;}
div3{width: 31%;}
}

/********** Medium devices only **********/
@media (min-width: 768px) and (max-width: 991px) {div1,div2,div3{float: left;border: 1px solid black}
div1{width: 47%;}
div2{width: 47%;}
div3{width: 100%;}
}
  body { text-align: center;
  font-size: 28px; }
  </style>
      
</head>
<body>
  <h1>Our Menu</h1>
  <div class="row">
    <div class="row1">
      
    <div1> 
      <section class="chicken" > Chicken</section>This is the content of each box. From what i gather, all three boxes have the same content or can have the same content. and i guess it should be long enough to form like a paragraph. i hope this is enough </div1>
  </div>
  <div class="row2">
    
    <div2> 
      <section class="beef">Beef</section>
    This is the content of each box. From what i gather, all three boxes have the same content or can have the same content. and i guess it should be long enough to form like a paragraph. i hope this is enough </div2>
  </div>
  <div class="row3">
    
    <div3> 
      <section class="sushi">Sushi</section>This is the content of each box. From what i gather, all three boxes have the same content or can have the same content. and i guess it should be long enough to form like a paragraph. i hope this is enough </div3>
  </div>
</div>
</body>
</html>
