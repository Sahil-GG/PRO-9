var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b090ba93-61df-49cf-afef-0866b3bfa31a","8215a6e5-19e3-4f19-956c-489daeb8fe36","d9e56bb3-af3d-4871-8079-cc537691b13d","4060a09a-4721-4285-b911-89279b031c12","0293d97a-b3a5-49cf-87fb-2b81022c431b","895d381c-ab20-4777-9e5f-a090c3598a33","afefe8e6-ca8c-4975-b12d-7591937392ec","e8529355-ad00-4280-af6f-1e66c06f96c5","8f7d9fa9-c65b-4ecf-bc6b-f85f5d58eee5","e6e2849c-7c7b-456f-8bd7-64a3976512e2","ae8427f9-b793-42db-a261-26c78bcd2ac1","988c887f-c443-4620-a4f5-21b59c6713e7","2398a04c-2647-4301-adea-85927c7b8821","c9d8b376-f9f9-40e8-91b0-cc481e777f1b","aed09dfa-cdd8-4b86-a96a-281c89093620","677a761b-91ad-4f53-ab2f-0cc22c9bdd05","f055ad92-1708-4082-9578-c6d3bd8e8782","3370d4b3-331d-473d-bd41-3da1cc86370b","dd8c2b06-3d6a-433c-b400-92cb4d768fd0","4309ac3b-816b-4bfb-8abb-ec31793fccb4","bcd43232-e156-47d5-bf6a-d8760f4d3e20","8fbe4e07-f078-49eb-8e1f-2598fb8122da","12756939-9887-4533-8c71-e96211523d14","47c7fe5d-bb95-4a23-aa2e-ca955a00fa9e","b020216c-f388-4d01-a290-6e0c6bf4c681","dec8797c-0396-4629-a366-675a3f5958c9","34c2a15b-7f4a-4440-847c-de3daf55b1af","3dc2c092-547f-4758-808c-51be07e3cb91","16d088b6-63b2-484b-b114-8cd7bf8dadc1","17930705-1ea6-42b9-bf77-a33f231e6343","44588733-2cf2-49d6-bc91-67f48f3aed3a"],"propsByKey":{"b090ba93-61df-49cf-afef-0866b3bfa31a":{"name":"animation_1","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"8215a6e5-19e3-4f19-956c-489daeb8fe36":{"name":"sword","sourceUrl":null,"frameSize":{"x":390,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"IbxviSlE1a9pRN1fWU1hX8oV4Y0adFSl","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":394},"rootRelativePath":"assets/8215a6e5-19e3-4f19-956c-489daeb8fe36.png"},"d9e56bb3-af3d-4871-8079-cc537691b13d":{"name":"background_landscape03_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"21AHKj4OY75xpo.C4VSPEt9EK1GBHrVH","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d9e56bb3-af3d-4871-8079-cc537691b13d.png"},"4060a09a-4721-4285-b911-89279b031c12":{"name":"planet","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"_zEW4HpLF5pMhK0oe8rRJLlRhnFL4PXF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/4060a09a-4721-4285-b911-89279b031c12.png"},"0293d97a-b3a5-49cf-87fb-2b81022c431b":{"name":"virus03_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"895d381c-ab20-4777-9e5f-a090c3598a33":{"name":"ob","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"IFXMGpSUr9A1OaFUzQJdiwCzniBGP3mH","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/895d381c-ab20-4777-9e5f-a090c3598a33.png"},"afefe8e6-ca8c-4975-b12d-7591937392ec":{"name":"ob2","sourceUrl":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"dHshQXiche2omlBhwWrKH5zbfEiC6doy","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png"},"e8529355-ad00-4280-af6f-1e66c06f96c5":{"name":"","sourceUrl":"assets/api/v1/animation-library/gamelab/84glPGNWF96yVw37ubRFQIYuIQYx80S4/category_germs/virus03_08.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"84glPGNWF96yVw37ubRFQIYuIQYx80S4","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/84glPGNWF96yVw37ubRFQIYuIQYx80S4/category_germs/virus03_08.png"},"8f7d9fa9-c65b-4ecf-bc6b-f85f5d58eee5":{"name":"ob3","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"e6e2849c-7c7b-456f-8bd7-64a3976512e2":{"name":"02","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"SCm1ZO1oGOZO819Nnbru9H1QMz.BU5cW","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e6e2849c-7c7b-456f-8bd7-64a3976512e2.png"},"ae8427f9-b793-42db-a261-26c78bcd2ac1":{"name":"bg","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"paDyMsmknuSDtrkgS1s3iOewBNpAfw_j","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ae8427f9-b793-42db-a261-26c78bcd2ac1.png"},"988c887f-c443-4620-a4f5-21b59c6713e7":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"UWCT.oMr9xJfnJQQCjrxWf0Q.yEGvUKl","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/988c887f-c443-4620-a4f5-21b59c6713e7.png"},"2398a04c-2647-4301-adea-85927c7b8821":{"name":"space1","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"c9d8b376-f9f9-40e8-91b0-cc481e777f1b":{"name":"mars","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"rkHPu79B5dBz92WdQeU.qMuk9QPKUg28","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/c9d8b376-f9f9-40e8-91b0-cc481e777f1b.png"},"aed09dfa-cdd8-4b86-a96a-281c89093620":{"name":"base","sourceUrl":"assets/api/v1/animation-library/gamelab/RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq/category_buildings/commercial_30.png","frameSize":{"x":316,"y":181},"frameCount":1,"looping":true,"frameDelay":2,"version":"RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":181},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq/category_buildings/commercial_30.png"},"677a761b-91ad-4f53-ab2f-0cc22c9bdd05":{"name":"ship","sourceUrl":null,"frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":12,"version":"Hn0Y4KGbj_7zl0SvVbpy9ibMLQxgm_Sw","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/677a761b-91ad-4f53-ab2f-0cc22c9bdd05.png"},"f055ad92-1708-4082-9578-c6d3bd8e8782":{"name":"1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"9UscqVLzYfSha3L1V0yFTI4mbqP4qzt_","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/f055ad92-1708-4082-9578-c6d3bd8e8782.png"},"3370d4b3-331d-473d-bd41-3da1cc86370b":{"name":"rock","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":15,"version":"vRhFTHIAjDbblwnVgKrqa091eoXlDpnB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3370d4b3-331d-473d-bd41-3da1cc86370b.png"},"dd8c2b06-3d6a-433c-b400-92cb4d768fd0":{"name":"rock_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":15,"version":"NvmGvFQLPRbP5yP18JzDQSiD3I2fjYRV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/dd8c2b06-3d6a-433c-b400-92cb4d768fd0.png"},"4309ac3b-816b-4bfb-8abb-ec31793fccb4":{"name":"ship16","sourceUrl":null,"frameSize":{"x":296,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"UPjKcqv0oPKdkSMhcC_rJXZOi.LPO_Qq","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":396},"rootRelativePath":"assets/4309ac3b-816b-4bfb-8abb-ec31793fccb4.png"},"bcd43232-e156-47d5-bf6a-d8760f4d3e20":{"name":"ship12","sourceUrl":null,"frameSize":{"x":296,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"dxP5MUtvoOotHKzK.UkNBX2nSaQ0pLzr","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":396},"rootRelativePath":"assets/bcd43232-e156-47d5-bf6a-d8760f4d3e20.png"},"8fbe4e07-f078-49eb-8e1f-2598fb8122da":{"name":"animalhead_giraffe_1","sourceUrl":"assets/api/v1/animation-library/gamelab/X75LwwMgVgz9hH0Vnn5pw_iEOlJijU0o/category_animals/animalhead_giraffe.png","frameSize":{"x":296,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"X75LwwMgVgz9hH0Vnn5pw_iEOlJijU0o","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/X75LwwMgVgz9hH0Vnn5pw_iEOlJijU0o/category_animals/animalhead_giraffe.png"},"12756939-9887-4533-8c71-e96211523d14":{"name":"rocket","sourceUrl":"assets/api/v1/animation-library/gamelab/cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf/category_buildings/building_24.png","frameSize":{"x":346,"y":274},"frameCount":1,"looping":true,"frameDelay":2,"version":"cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":274},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf/category_buildings/building_24.png"},"47c7fe5d-bb95-4a23-aa2e-ca955a00fa9e":{"name":"building_24_1","sourceUrl":"assets/api/v1/animation-library/gamelab/cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf/category_buildings/building_24.png","frameSize":{"x":346,"y":274},"frameCount":1,"looping":true,"frameDelay":2,"version":"cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":346,"y":274},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cOFfnZ4SDQ8dBC6V1zdMdGpoREfoovHf/category_buildings/building_24.png"},"b020216c-f388-4d01-a290-6e0c6bf4c681":{"name":"base2","sourceUrl":"assets/api/v1/animation-library/gamelab/U9epkno.ASZYYmgwGLd8N1nGJLxbGCGj/category_buildings/commercial_17.png","frameSize":{"x":380,"y":190},"frameCount":1,"looping":true,"frameDelay":2,"version":"U9epkno.ASZYYmgwGLd8N1nGJLxbGCGj","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":190},"rootRelativePath":"assets/api/v1/animation-library/gamelab/U9epkno.ASZYYmgwGLd8N1nGJLxbGCGj/category_buildings/commercial_17.png"},"dec8797c-0396-4629-a366-675a3f5958c9":{"name":"EARTH","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"ufVdL00ZhwVevHvJB9ykB2enUPhOaTeW","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/dec8797c-0396-4629-a366-675a3f5958c9.png"},"34c2a15b-7f4a-4440-847c-de3daf55b1af":{"name":"microphone_1","sourceUrl":null,"frameSize":{"x":59,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"J1DEWG9wmPruTX_p1Zu9Fe.1WmR5U7lT","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":116},"rootRelativePath":"assets/34c2a15b-7f4a-4440-847c-de3daf55b1af.png"},"3dc2c092-547f-4758-808c-51be07e3cb91":{"name":"puck_1","sourceUrl":null,"frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"RP4NXmZW1_DYdDWR_gi3tgJQiZlaNlSS","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/3dc2c092-547f-4758-808c-51be07e3cb91.png"},"16d088b6-63b2-484b-b114-8cd7bf8dadc1":{"name":"A1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"ECF9WbpHTDoxtX.q_qs3UDDu3FxaVFgU","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/16d088b6-63b2-484b-b114-8cd7bf8dadc1.png"},"17930705-1ea6-42b9-bf77-a33f231e6343":{"name":"A2","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"R6N0SXjJ8ajkeAJlZSh_tUyOzRTGtVKw","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/17930705-1ea6-42b9-bf77-a33f231e6343.png"},"44588733-2cf2-49d6-bc91-67f48f3aed3a":{"name":"ee","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"dpkmeTdUhaebXeCNqwEBbFP9XDi9YNbb","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/44588733-2cf2-49d6-bc91-67f48f3aed3a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var BG =createSprite(200,350,200,150);
BG.setAnimation("mars");

var GH = createSprite(200, -50,200,150);
GH.setAnimation("space1");


var B1=createSprite(175,250,350,10);
B1.shapeColor="maroon";
var B1P=createSprite(375,250,50,10);
B1P.shapeColor="red";
var B2=createSprite(175,150,350,10);
B2.shapeColor="maroon";
var B2P =createSprite(375,150,50,10);
B2P.shapeColor="RED";
var B3 =createSprite(200,397,400,5);
B3.shapeColor="maroon";
var B4=createSprite(200,3,400,5);
B4.shapeColor="maroon";
var B5=createSprite(3,200,5,400);
B5.shapeColor="maroon";
var B6=createSprite(397,200,5,400);
B6.shapeColor="maroon";
var ob =createSprite(300,350,20,20);
ob.setAnimation("ob");
ob.scale=0.09;
var ob2 =createSprite(225,325,20,20);
ob2.setAnimation("ob");
ob2.scale=0.09;
var ob3=createSprite(150,300,20,20);
ob3.setAnimation("ob");
ob3.scale=0.09;
var ob4=createSprite(75,275,20,20);
ob4.setAnimation("ob");
ob4.scale=0.09;
var button = createSprite(23,263);
button.setAnimation("base");
button.scale=0.09;
var SAHIL= createSprite(375,380,19,19);
SAHIL.setAnimation("ship12");
SAHIL.scale=0.066;

var B7 = createSprite(200, 200,10,80);
B7.shapeColor="BLACK";
var B8 = createSprite(200,200,80,10);
B8.shapeColor="GREY";
var B9 =createSprite(345,178,10,45);
B9.shapeColor="MAROON";
var B10=createSprite(345,223,10,45);
B10.shapeColor="RED";

var B11=createSprite(310,213,10,65);
B11.shapeColor="MAROON";
var B12=createSprite(275,187,10,65);
B12.shapeColor="MAROON";
var B13 =createSprite(125,187,10,65);
B13.shapeColor="MAROON";

var B14 = createSprite(90, 213,10,65);
B14.shapeColor="MAROON";

var B15 = createSprite(55,187,10,65);
B15.shapeColor="MAROON";

var button2 =createSprite(23,160,20,10);
button2.setAnimation("base");
button2.scale=0.08;
var button3 = createSprite(377,162,20,10);
button3.setAnimation("base");
button3.scale=0.08;
var EARTH=createSprite(20,20,20,20);
EARTH.setAnimation("EARTH");
EARTH.scale=0.09;
var B16=createSprite(50,75,90,10);
B16.shapeColor="YELLOW";
var B17 =createSprite(90,40,10,75);
B17.shapeColor="YELLOW";
var B18 =createSprite(325,122,10,45);
B18.shapeColor="YELLOW";
var B19 =createSprite(325,28,10,45);
B19.shapeColor="YELLOW";
var B20 =createSprite(275,75,10,50);
B20.shapeColor="YELLOW";
var ob5=createSprite(115,50,15,15);
ob5.setAnimation("A2");
ob5.scale=0.4;
var ob6=createSprite(180,50,15,15);
ob6.setAnimation("A2");
ob6.scale=0.4;
var button4 = createSprite(18,88,20,15);
button4.setAnimation("base");
button4.scale=0.08;
var button5=createSprite(-1,-1,20,10);
button5.setAnimation("base2");
button5.scale=0.08;
var B21=createSprite(175,144,350,1);
B21.shapeColor="BLACK";
var B22=createSprite(200,5,400,1);
B22.shapeColor="BLACK";
var B23=createSprite(5,75,1,140);
B23.shapeColor="BLACK";
var B24=createSprite(395,75,1,140);
B24.shapeColor="BLACK";

ob.velocityY=5;
ob2.velocityY=-5;
ob3.velocityY=5;
ob4.velocityY=-5;
ob5.velocityY=4;
ob6.velocityY=-4;

function draw() {
 background("GREY") ;

if (keyDown("right")) {
    SAHIL.x=SAHIL.x+4;
playSound("assets/category_whoosh/airy_whoosh.mp3", false);
        
    
  }
if (keyDown("left")){
  SAHIL.x=SAHIL.x-4;
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_7.mp3", false);
}  
 if(keyDown("up")){
   SAHIL.y=SAHIL.y-4;
 }   
  if(keyDown("down")){
    SAHIL.y=SAHIL.y+4;
  }
ob.bounceOff(B1);
ob.bounceOff(B3);
ob2.bounceOff(B1);
ob2.bounceOff(B3);
ob3.bounceOff(B1);  
ob3.bounceOff(B3);
ob4.bounceOff(B1); 
ob4.bounceOff(B3);
ob5.bounceOff(B2);
ob5.bounceOff(B4);
ob6.bounceOff(B2);
ob6.bounceOff(B4);
SAHIL.bounceOff(B21);

if(SAHIL.isTouching(button)){
  B1P.x=325;
  B1P.y=250;
  ob.velocityY=2;
ob2.velocityY=-2;
ob3.velocityY=2;
ob4.velocityY=-2;
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
  
}
if(SAHIL.isTouching(button3)){
  B10.x=345;
  B10.y=178;
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
}

if(SAHIL.isTouching(B1)||SAHIL.isTouching(B2)||
SAHIL.isTouching(B3)||SAHIL.isTouching(B4)||
SAHIL.isTouching(B5)||SAHIL.isTouching(B6)||
SAHIL.isTouching(B7)||SAHIL.isTouching(B9)||
SAHIL.isTouching(B10)||SAHIL.isTouching(B11)||
SAHIL.isTouching(B12)||SAHIL.isTouching(B13)||
SAHIL.isTouching(B14)||SAHIL.isTouching(B15))
{
SAHIL.x=375;
SAHIL.y=380;
B1P.x=375;
  B1P.y=250;
   B2P.y=148; 
   B2P.x=375;
  B1P.y=250;
  B10.x=345;
  B10.y=223;
  playSound("assets/category_hits/retro_game_simple_impact_2.mp3");
}
 



if(SAHIL.isTouching(B1P)){
  SAHIL.x=375;
  SAHIL.y=380;
  B1P.x=375;
  B1P.y=250;
}
if(SAHIL.isTouching(B2P))
{
  SAHIL.x=375;
  SAHIL.y=380;
  B2P.x=375;
  B2P.y=150; 
   B1P.x=375;
  B1P.y=250;
  B10.x=345;
  B10.y=223;
}



if(SAHIL.isTouching(ob)||SAHIL.isTouching(ob2)||
SAHIL.isTouching(ob3)||SAHIL.isTouching(ob4))

{
SAHIL.x=375;
SAHIL.y=380;
B1P.x=375;

playSound("assets/category_hits/vibrant_game_shimmering_hit_1.mp3", false);

 }


B7.rotation=B7.rotation+0.5;
B8.rotation=B7.rotation+0.5;
B20.rotation=B20.rotation+2;
B19.rotation=B19.rotation+5;
B18.rotation=B18.rotation+5;



if (SAHIL.isTouching(button2)){
  B2P.x=325;
  B2P.y=150;
button3.destroy();
B8.destroy();
B7.destroy();
  playSound("assets/default.mp3", false);
    
}

if(SAHIL.isTouching(B16)||SAHIL.isTouching(B17)||
SAHIL.isTouching(B18)||SAHIL.isTouching(B19)||
SAHIL.isTouching(B20)){
 SAHIL.x=375;
  SAHIL.y=215;
  B2P.x=375;
  B2P.y=145; 
   B1P.x=375;
  B1P.y=250;
  B10.x=310;
  B10.y=213;
playSound("assets/category_hits/vibrant_game_deep_hit.mp3", false);
    

}

if (SAHIL.isTouching(button4)){
  button5.x=225;
  button5.y=10;
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
}
if(SAHIL.isTouching(button5)){
  B16.destroy();
  B17.destroy();
  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
}
if (SAHIL.isTouching(ob5)||SAHIL.isTouching(ob6)){
  SAHIL.x=375;
  SAHIL.y=215;
  B2P.x=375;
  B2P.y=145; 
   B1P.x=375;
  B1P.y=250;
  B10.x=310;
  B10.y=213;
playSound("assets/category_hits/vibrant_crate_break_1.mp3", false);
}

if(SAHIL.isTouching(EARTH))
{
  playSound("assets/category_explosion/retro_game_enemy_fireball_2.mp3", false);
  GH.destroy();
  ob5.destroy();
  ob6.destroy();
  B18.destroy();
  B19.destroy();
  B20.destroy();
  button.destroy();
  button2.destroy();
  button3.destroy();
  button4.destroy();
  button5.destroy();
  ob.destroy();
  ob2.destroy();
  ob3.destroy();
  ob4.destroy();
  B7.destroy();
  B8.destroy();
  B9.destroy();
  B10.destroy();
  B11.destroy();
  B12.destroy();
  B13.destroy();
  B14.destroy();
  B15.destroy();
  B1.destroy();
  B2.destroy();
  BG.destroy();
  B1P.destroy();
  B2P.destroy();
  B21.destroy();
  fill("BLACK");
  rgb(111,1,1);
  textSize(50);
  text("U_R_LEGEND_",10,200);
}








  
drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
