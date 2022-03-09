/* Dimensions de la fenêtre */
var WIDTH = window.innerWidth; /* Largeur */
var HEIGHT = window.innerHeight; /* Hauteur */

/* Configuration du renderer */
var renderer = new THREE.WebGLRenderer({antialias:true}); /* Crée un renderer WebGL */
renderer.setSize(WIDTH, HEIGHT); /* Définit sa taille aux dimensions de la fenêtre */
renderer.setClearColor(0x24323F, 1); /* Définit la couleur du fond */
document.body.appendChild(renderer.domElement); /* Ajout de la structure DOM https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction */

/* Configuration de la scène */
var scene = new THREE.Scene(); /* Lieu où tout sera créé */

/* Configuration de la caméra */
var camera = new THREE.PerspectiveCamera(90, WIDTH/HEIGHT, 0.1, 10000); /* Caméra de type perspective, champs de vision de 70°, aspect ratio, distance de la depuis laquelle et jusqu'à laquelle lesobjet s'afficheront */
camera.position.set(0, 50, 100); /* Position de la caméra par rapport au centre de la scène */
camera.rotation.set(-44.2, 0, 0);
scene.add(camera); /* Ajout de cette caméra à la scene */

var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light); /* Ajout de la lumière à la scene */



function road(){

    const goudron_geometry = new THREE.PlaneGeometry( 100, 1000 );
    const goudron_material = new THREE.MeshBasicMaterial( {color: 0x231f20, side: THREE.FrontSide} );
    const road_goudron = new THREE.Mesh( goudron_geometry, goudron_material );
    road_goudron.rotation.set(0, 0, 0);
    scene.add( road_goudron );

    const lignegauche_geometry = new THREE.PlaneGeometry( 5, 1000 );
    const lignegauche_material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.BackSide} );
    const lignegauche = new THREE.Mesh( lignegauche_geometry, lignegauche_material );
    lignegauche.rotation.set(0, 0, 0);
    lignegauche.position.x = -45;
    scene.add( lignegauche );

    const lignedroite_geometry = new THREE.PlaneGeometry( 5, 1000 );
    const lignedroite_material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.BackSide} );
    const lignedroite = new THREE.Mesh( lignedroite_geometry, lignedroite_material );
    lignedroite.rotation.set(0, 0, 0);
    lignedroite.position.x = 45;
    scene.add( lignedroite );

    for ( i=0 ; i<6 ; i++ ) {
        let n = i*10 ;
        const lignemilieu_geometry = new THREE.PlaneGeometry( 3, 10 );
        const lignemilieu_material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.BackSide} );
        const lignemilieu = new THREE.Mesh( lignemilieu_geometry, lignemilieu_material );
        lignemilieu.rotation.set(0, 0, 0);
        lignemilieu.position.y = n
        scene.add( lignemilieu );
    };
}
road();




/* Grille */
var gridHelper = new THREE.GridHelper( 100 , 10 );
scene.add( gridHelper );

/* Cube */
var boxGeometry = new THREE.BoxGeometry(10, 10, 10); /* Pavé de 10 * 10 * 10 unités */
var basicMaterial = new THREE.MeshBasicMaterial({color: 0xF29559}); /* Couleur de notre pavé */
var cube = new THREE.Mesh(boxGeometry, basicMaterial); /* Applique la couleur sur notre pavé */
cube.position.x = -25;
cube.rotation.set(0.4, 0.2, 0);
scene.add(cube); /* Ajout du cube à la scene */

/* Torus */
var torusGeometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
var torusMaterial = new THREE.MeshBasicMaterial( { color: 0xADD8E6, wireframe : true } );
var torus = new THREE.Mesh( torusGeometry, torusMaterial );
scene.add( torus );


function forward(){
    document.addEventListener("keyup", function(event) {
        if (event.key === 'z') {
            camera.position.z -= 0.05
        }
    });
}

function backward(){
    document.addEventListener("keyup", function(event) {
        if (event.key === 's') {
            camera.position.z += 0.05
        }
    });
}

function down(){
    document.addEventListener("keyup", function(event) {
        if (event.key === 'Control') {
            camera.position.y -= 0.05
        }
    });
}

function up(){
    document.addEventListener("keyup", function(event) {
        if (event.key === ' ') {
            camera.position.y += 0.05
        }
    });
}


var t = 0; /* Initialisation du temps */
function render() { /* Fonction pour faire le rendu de la scène à chaque frame grâce au renderer */
    t += 0.01; /* Avancement du temps à chaque frame */
    requestAnimationFrame(render); /* Provoque le rendu constant de la scène sur chaque image */
    forward();
    backward();
    down();
    up();
    cube.rotation.y += 0.01;
    renderer.render(scene, camera); /* Le renderer fait le rendu de la scène */
}
render();