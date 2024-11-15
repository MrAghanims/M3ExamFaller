import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load("sand.png");
const texture2 = textureLoader.load("water.jpeg");
const texture3 = textureLoader.load("wood.png");

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 0, 20, 100 );
controls.update();
const pointLight = new THREE.PointLight();
pointLight.intensity = 75;
pointLight.position.set(0,5,0)


scene.background = new THREE.Color ( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const floor = createFloor();

const block1 = createBlock();
const block2 = createBlock();
const block3 = createBlock();
const block4 = createBlock();
const block5 = createBlock();
const block6 = createBlock();
const block7 = createBlock();
const block8 = createBlock();
const block9 = createBlock();
const block10 = createBlock();
const block11 = createBlock();
const block12 = createBlock();
const block13 = createBlock();
const block14 = createBlock();
const block15 = createBlock();
const block16 = createBlock();
const block17 = createBlock();
const block18 = createBlock();
const block19 = createBlock();
const block20 = createBlock();
const block21 = createBlock();
const block22 = createBlock();
const block23 = createBlock();
const block24 = createBlock();
const block25 = createBlock();
const block26 = createBlock();
const block27 = createBlock();
const block28 = createBlock();
const block29 = createBlock();
const block30 = createBlock();
const block31 = createBlock();
const block32 = createBlock();
const block33 = createBlock();
const block34 = createBlock();
const block35 = createBlock();
const block36 = createBlock();
const block37 = createBlock();
const block38 = createBlock();
const block39 = createBlock();
const block40 = createBlock();
const block41 = createBlock();
const block42 = createBlock();
const block43 = createBlock();
const block44 = createBlock();
const block45 = createBlock();
const block46 = createBlock();
const block47 = createBlock();
const block48 = createBlock();
const block49 = createBlock();
const block50 = createBlock();
const block51 = createBlock();
const block52 = createBlock();
const block53 = createBlock();
const block54 = createBlock();
const block55 = createBlock();
const block56 = createBlock();
const block57 = createBlock();
const block58 = createBlock();
const block59 = createBlock();
const block60 = createBlock();
const block61 = createBlock();
const block62 = createBlock();
const block63 = createBlock();
const block64 = createBlock();
const block65 = createBlock();
const block66 = createBlock();
const block67 = createBlock();
const block68 = createBlock();
const block69 = createBlock();
const block70 = createBlock();
const block71 = createBlock();
const block72 = createBlock();
const block73 = createBlock();
const block74 = createBlock();
const block75 = createBlock();
const block76 = createBlock();
const block77 = createBlock();
const block78 = createBlock();
const block79 = createBlock();
const block80 = createBlock();
const block81 = createBlock();
const block82 = createBlock();
const block83 = createBlock();
const block84 = createBlock();
const block85 = createBlock();
const block86 = createBlock();
const block87 = createBlock();
const block88 = createBlock();
const block89 = createBlock();
const block90 = createBlock();
const block91 = createBlock();
const block92 = createBlock();
const block93 = createBlock();
const block94 = createBlock();
const block95 = createBlock();
const block96 = createBlock();
const block97 = createBlock();
const block98 = createBlock();
const block99 = createBlock();
const block100 = createBlock();
const block101 = createBlock();
const block102 = createBlock();

const water1 = createWater();
const water2 = createWater();
const water3 = createWater();
const water4 = createWater();
const water5 = createWater();
const water6 = createWater();
const water7 = createWater();
const water8 = createWater();
const water9 = createWater();
const water10 = createWater();
const water11 = createWater();
const water12 = createWater();
const water13 = createWater();
const water14 = createWater();
const water15 = createWater();
const water16 = createWater();
const water17 = createWater();
const water18 = createWater();
const water19 = createWater();
const water20 = createWater();
const water21 = createWater();
const water22 = createWater();
const water23 = createWater();
const water24 = createWater();
const water25 = createWater();
const water26 = createWater();
const water27 = createWater();
const water28 = createWater();
const water29 = createWater();
const water30 = createWater();
const water31 = createWater();
const water32 = createWater();
const water33 = createWater();
const water34 = createWater();
const water35 = createWater();
const water36 = createWater();
const water37 = createWater();
const water38 = createWater();
const water39 = createWater();
const water40 = createWater();
const water41 = createWater();
const water42 = createWater();
const water43 = createWater();
const water44 = createWater();
const water45 = createWater();
const water46 = createWater();
const water47 = createWater();
const water48 = createWater();
const water49 = createWater();
const water50 = createWater();
const water51 = createWater();
const water52 = createWater();
const water53 = createWater();
const water54 = createWater();
const water55 = createWater();
const water56 = createWater();
const water57 = createWater();
const water58 = createWater();
const water59 = createWater();
const water60 = createWater();
const water61 = createWater();
const water62 = createWater();
const water63 = createWater();
const water64 = createWater();

const wood1 =createWood();
const wood2 =createWood();
const wood3 =createWood();
const wood4 =createWood();
const wood5 =createWood();
const wood6 =createWood();
const wood7 =createWood();
const wood8 =createWood();
const wood9 =createWood();
const wood10 =createWood();
const wood11 =createWood();
const wood12 =createWood();
const wood13 =createWood();
const wood14 =createWood();

const light = new THREE.HemisphereLight( 0xe3c8a3 , 0x365f75, 1);


floor.position.set(1.5,0,1.5);
light.position.set(0.5,1.5,0);

water1.position.set(0,0.5,2.5);
water2.position.set(1,0.5,2.5);
water3.position.set(2,0.5,2.5);
water4.position.set(3,0.5,2.5);
water5.position.set(4,0.5,2.5);
water6.position.set(5,0.5,2.5);
water7.position.set(6,0.5,2.5);
water8.position.set(7,0.5,2.5);
water9.position.set(8,0.5,2.5);
water10.position.set(9,0.5,2.5);
water11.position.set(-1,0.5,2.5);
water12.position.set(-2,0.5,2.5);
water13.position.set(-3,0.5,2.5);
water14.position.set(-4,0.5,2.5);
water15.position.set(-5,0.5,2.5);
water16.position.set(-6,0.5,2.5);

water17.position.set(0,0.5,1.5);
water18.position.set(1,0.5,1.5);
water19.position.set(2,0.5,1.5);
water20.position.set(3,0.5,1.5);
water21.position.set(4,0.5,1.5);
water22.position.set(5,0.5,1.5);
water23.position.set(6,0.5,1.5);
water24.position.set(7,0.5,1.5);
water25.position.set(8,0.5,1.5);
water26.position.set(9,0.5,1.5);
water27.position.set(-1,0.5,1.5);
water28.position.set(-2,0.5,1.5);
water29.position.set(-3,0.5,1.5);
water30.position.set(-4,0.5,1.5);
water31.position.set(-5,0.5,1.5);
water32.position.set(-6,0.5,1.5);

water33.position.set(0,0.5,0.5);
water34.position.set(1,0.5,0.5);
water35.position.set(2,0.5,0.5);
water36.position.set(3,0.5,0.5);
water37.position.set(4,0.5,0.5);
water38.position.set(5,0.5,0.5);
water39.position.set(6,0.5,0.5);
water40.position.set(7,0.5,0.5);
water41.position.set(8,0.5,0.5);
water42.position.set(9,0.5,0.5);
water43.position.set(-1,0.5,0.5);
water44.position.set(-2,0.5,0.5);
water45.position.set(-3,0.5,0.5);
water46.position.set(-4,0.5,0.5);
water47.position.set(-5,0.5,0.5);
water48.position.set(-6,0.5,0.5);

water49.position.set(0,0.5,-0.5);
water50.position.set(1,0.5,-0.5);
water51.position.set(2,0.5,-0.5);
water52.position.set(3,0.5,-0.5);
water53.position.set(4,0.5,-0.5);
water54.position.set(5,0.5,-0.5);
water55.position.set(6,0.5,-0.5);
water56.position.set(7,0.5,-0.5);
water57.position.set(8,0.5,-0.5);
water58.position.set(9,0.5,-0.5);
water59.position.set(-1,0.5,-0.5);
water60.position.set(-2,0.5,-0.5);
water61.position.set(-3,0.5,-0.5);
water62.position.set(-4,0.5,-0.5);
water63.position.set(-5,0.5,-0.5);
water64.position.set(-6,0.5,-0.5);

block1.position.set(1,0.5,-5.5);
block2.position.set(2,0.5,-5.5);
block3.position.set(3,0.5,-5.5);
block4.position.set(4,0.5,-5.5);
block5.position.set(5,0.5,-5.5);
block6.position.set(6,0.5,-5.5);
block7.position.set(7,0.5,-5.5);
block8.position.set(8,0.5,-5.5);
block9.position.set(9,0.5,-5.5);
block10.position.set(0,0.5,-5.5);
block11.position.set(-1,0.5,-5.5);
block12.position.set(-2,0.5,-5.5);
block13.position.set(-3,0.5,-5.5);
block14.position.set(-4,0.5,-5.5);
block15.position.set(-5,0.5,-5.5);
block16.position.set(-6,0.5,-5.5);

block17.position.set(-6,1.5,-5.5);
block18.position.set(-5,1.5,-5.5);
block19.position.set(-4,1.5,-5.5);
block20.position.set(-3,1.5,-5.5);
block21.position.set(1,1.5,-5.5);
block22.position.set(2,1.5,-5.5);
block23.position.set(3,1.5,-5.5);
block24.position.set(4,1.5,-5.5);
block25.position.set(5,1.5,-5.5);
block26.position.set(6,1.5,-5.5);
block27.position.set(7,1.5,-5.5);
block28.position.set(8,1.5,-5.5);
block29.position.set(9,1.5,-5.5);
block30.position.set(0,1.5,-5.5);
block31.position.set(-1,1.5,-5.5);
block32.position.set(-2,1.5,-5.5);

block33.position.set(-6,1.5,-4.5);
block34.position.set(-5,1.5,-4.5);
block35.position.set(-4,1.5,-4.5);
block36.position.set(-3,1.5,-4.5);
block37.position.set(1,1.5,-4.5);
block38.position.set(2,1.5,-4.5);
block39.position.set(3,1.5,-4.5);
block40.position.set(4,1.5,-4.5);
block41.position.set(5,1.5,-4.5);
block42.position.set(6,1.5,-4.5);
block43.position.set(7,1.5,-4.5);
block44.position.set(8,1.5,-4.5);
block45.position.set(9,1.5,-4.5);
block46.position.set(0,1.5,-4.5);
block47.position.set(-1,1.5,-4.5);
block48.position.set(-2,1.5,-4.5);

block49.position.set(9,1.5,-3.5);
block50.position.set(0,1.5,-3.5);
block51.position.set(-1,1.5,-3.5);
block52.position.set(-2,1.5,-3.5);
block53.position.set(-6,1.5,-3.5);
block54.position.set(-5,1.5,-3.5);
block55.position.set(-4,1.5,-3.5);
block56.position.set(-3,1.5,-3.5);
block57.position.set(1,1.5,-3.5);
block58.position.set(2,1.5,-3.5);
block59.position.set(3,1.5,-3.5);
block60.position.set(4,1.5,-3.5);
block61.position.set(5,1.5,-3.5);
block62.position.set(6,1.5,-3.5);
block63.position.set(7,1.5,-3.5);
block64.position.set(8,1.5,-3.5);

block65.position.set(-4,1.5,-2.5);
block66.position.set(-3,1.5,-2.5);
block67.position.set(1,1.5,-2.5);
block68.position.set(2,1.5,-2.5);
block69.position.set(3,1.5,-2.5);
block70.position.set(4,1.5,-2.5);
block71.position.set(5,1.5,-2.5);
block72.position.set(6,1.5,-2.5);
block73.position.set(7,1.5,-2.5);
block74.position.set(8,1.5,-2.5);
block75.position.set(9,1.5,-2.5);
block76.position.set(0,1.5,-2.5);
block77.position.set(-1,1.5,-2.5);
block78.position.set(-2,1.5,-2.5);
block79.position.set(-5,1.5,-2.5);
block80.position.set(-6,1.5,-2.5);

block81.position.set(1,0.5,-1.5);
block82.position.set(2,0.5,-1.5);
block83.position.set(3,0.5,-1.5);
block84.position.set(4,0.5,-1.5);
block85.position.set(5,0.5,-1.5);
block86.position.set(6,0.5,-1.5);
block87.position.set(7,0.5,-1.5);
block88.position.set(8,0.5,-1.5);
block89.position.set(9,0.5,-1.5);
block90.position.set(0,0.5,-1.5);
block91.position.set(-1,0.5,-1.5);
block92.position.set(-2,0.5,-1.5);
block93.position.set(-3,0.5,-1.5);
block94.position.set(-4,0.5,-1.5);
block95.position.set(-5,0.5,-1.5);
block96.position.set(-6,0.5,-1.5);

block97.position.set(-6,0.5,-4.5);
block98.position.set(-6,0.5,-3.5);
block99.position.set(-6,0.5,-2.5);
block100.position.set(9,0.5,-4.5);
block101.position.set(9,0.5,-3.5);
block102.position.set(9,0.5,-2.5);

wood1.position.set(-1,2.5,-3.5);
wood2.position.set(-1,2.5,-4.5);
wood3.position.set(0,2.5,-5.5);
wood4.position.set(1,2.5,-5.5);
wood5.position.set(2,2.5,-5.5);
wood6.position.set(3,2.5,-5.5);
wood7.position.set(3,2.5,-4.5);
wood8.position.set(3,2.5,-3.5);
wood9.position.set(0,2,-3.5);
wood10.position.set(0,2,-4.5);
wood11.position.set(1,2,-4.5);
wood12.position.set(2,2,-4.5);
wood13.position.set(2,2,-3.5);
wood14.position.set(-1,2.5,-5.5);


scene.add(floor);
scene.add(light);
//scene.add(block);
scene.add(block1);
scene.add(block2);
scene.add(block3);
scene.add(block4);
scene.add(block5);
scene.add(block6);
scene.add(block7);
scene.add(block8);
scene.add(block9);
scene.add(block10);
scene.add(block11);
scene.add(block12);
scene.add(block13);
scene.add(block14);
scene.add(block15);
scene.add(block16);
scene.add(block17);
scene.add(block18);
scene.add(block19);
scene.add(block20);
scene.add(block21);
scene.add(block22);
scene.add(block23);
scene.add(block24);
scene.add(block25);
scene.add(block26);
scene.add(block27);
scene.add(block28);
scene.add(block29);
scene.add(block30);
scene.add(block31);
scene.add(block32);
scene.add(block33);
scene.add(block34);
scene.add(block35);
scene.add(block36);
scene.add(block37);
scene.add(block38);
scene.add(block39);
scene.add(block40);
scene.add(block41);
scene.add(block42);
scene.add(block43);
scene.add(block44);
scene.add(block45);
scene.add(block46);
scene.add(block47);
scene.add(block48);
scene.add(block49);
scene.add(block50);
scene.add(block51);
scene.add(block52);
scene.add(block53);
scene.add(block54);
scene.add(block55);
scene.add(block56);
scene.add(block57);
scene.add(block58);
scene.add(block59);
scene.add(block60);
scene.add(block61);
scene.add(block62);
scene.add(block63);
scene.add(block64);
scene.add(block65);
scene.add(block66);
scene.add(block67);
scene.add(block68);
scene.add(block69);
scene.add(block70);
scene.add(block71);
scene.add(block72);
scene.add(block73);
scene.add(block74);
scene.add(block75);
scene.add(block76);
scene.add(block77);
scene.add(block78);
scene.add(block79);
scene.add(block80);
scene.add(block81);
scene.add(block82);
scene.add(block83);
scene.add(block84);
scene.add(block85);
scene.add(block86);
scene.add(block87);
scene.add(block88);
scene.add(block89);
scene.add(block90);
scene.add(block91);
scene.add(block92);
scene.add(block93);
scene.add(block94);
scene.add(block95);
scene.add(block96);

scene.add(block97);
scene.add(block98);
scene.add(block99);
scene.add(block100);
scene.add(block101);
scene.add(block102);

scene.add(pointLight);

scene.add(water1);
scene.add(water2);
scene.add(water3);
scene.add(water4);
scene.add(water5);
scene.add(water6);
scene.add(water7);
scene.add(water8);
scene.add(water9);
scene.add(water10);
scene.add(water11);
scene.add(water12);
scene.add(water13);
scene.add(water14);
scene.add(water15);
scene.add(water16);
scene.add(water17);
scene.add(water18);
scene.add(water19);
scene.add(water20);
scene.add(water21);
scene.add(water22);
scene.add(water23);
scene.add(water24);
scene.add(water25);
scene.add(water26);
scene.add(water27);
scene.add(water28);
scene.add(water29);
scene.add(water30);
scene.add(water31);
scene.add(water32);
scene.add(water33);
scene.add(water34);
scene.add(water35);
scene.add(water36);
scene.add(water37);
scene.add(water38);
scene.add(water39);
scene.add(water40);
scene.add(water41);
scene.add(water42);
scene.add(water43);
scene.add(water44);
scene.add(water45);
scene.add(water46);
scene.add(water47);
scene.add(water48);
scene.add(water49);
scene.add(water50);
scene.add(water51);
scene.add(water52);
scene.add(water53);
scene.add(water54);
scene.add(water55);
scene.add(water56);
scene.add(water57);
scene.add(water58);
scene.add(water59);
scene.add(water60);
scene.add(water61);
scene.add(water62);
scene.add(water63);
scene.add(water64);

scene.add(wood1);
scene.add(wood2);
scene.add(wood3);
scene.add(wood4);
scene.add(wood5);
scene.add(wood6);
scene.add(wood7);
scene.add(wood8);
scene.add(wood9);
scene.add(wood10);
scene.add(wood11);
scene.add(wood12);
scene.add(wood13);
scene.add(wood14);

camera.lookAt(0,0,0);



function animate() {
    requestAnimationFrame( animate );

	controls.update();

	renderer.render( scene, camera );

}
animate();
function createFloor(){
    const room = new THREE.Group();

    // Materials
    const floorMaterial = new THREE.MeshToonMaterial({ color: 0xFFDEAD })
    

    // Geometries
    const floorGeometry = new THREE.BoxGeometry(16,0.1,9);
   

    // Meshes
    const floor = new THREE.Mesh(floorGeometry,floorMaterial);
   

    // Positions
    floor.position.set(0,0,-3);

    room.add(floor);

    return room;
}
function createBlock(){
    const block = new THREE.Group();

    // Materials
    
    const blockMaterial = new THREE.MeshToonMaterial({map: texture1 })

    // Geometries
    
    const blockGeometry = new THREE.BoxGeometry(1,1,1,1);

    // Meshes
   
    const blocks = new THREE.Mesh(blockGeometry,blockMaterial);

    // Positions

    block.position.set(0.5,0.5,-2.5);

    block.add(blocks);

    return block;
}

function createWater(){
    const block = new THREE.Group();

    // Materials
    
    const blockMaterial = new THREE.MeshToonMaterial({map: texture2 })

    // Geometries
    
    const blockGeometry = new THREE.BoxGeometry(1,1,1,1);

    // Meshes
   
    const blocks = new THREE.Mesh(blockGeometry,blockMaterial);

    // Positions
    block.position.set(0.5,0.5,-2.5);

    block.add(blocks);

    return block;
}
function createWood(){
    const block = new THREE.Group();

    // Materials
    
    const blockMaterial = new THREE.MeshToonMaterial({map: texture3 })

    // Geometries
    
    const blockGeometry = new THREE.BoxGeometry(1,1,1,1);

    // Meshes
   
    const blocks = new THREE.Mesh(blockGeometry,blockMaterial);

    // Positions
    block.position.set(0.5,0.5,-2.5);

    block.add(blocks);

    return block;
}

