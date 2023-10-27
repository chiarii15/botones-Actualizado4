    window.PRIMER = "querySelector" ; 
    window.ARDUINO = function(n) {}
    window.SALIDA = function(n) { ARDUINO("SALIDA("+n+")")};
    window.PRENDER = function(n) {ARDUINO("PRENDER("+n+")")};
    window.APAGAR = function(n) {ARDUINO("APAGAR("+n+")")};
    window.SERVOHABILITAR = function(n){ARDUINO("SERVO:HABILITAR("+n+")")};
    window.SERVO = function(n,ang){ARDUINO("SERVO("+n+"?"+ang+")")};
    window.SUSCRIBIR = function(n){ARDUINO("SUSCRIBIR("+n+")")}
    window.DESUSCRIBIR = function(n){ARDUINO("DESUSCRIBIR("+n+")")}
    window.REMOTOHABILITAR = function(n) {ARDUINO("REMOTO:HABILITAR("+n);}
    window.A0 = 14 ;
    window.A1 = 15 ;
    window.A2 = 16 ;
    window.A3 = 17 ;
    window.A4 = 18 ;
    window.A5 = 19 ;
    window.A6 = 20 ;
    window.A7 = 21 ;
var raiz = Math.sqrt ; raiz.cuadrada = Math.sqrt ; raiz.cubica = function(x){return x**(1/3)}
function ESPERAR( dadosMS ) {
    return new Promise(r => setTimeout(r, dadosMS));
}
Function.prototype.en = function(n){return setTimeout(this,(n|1)*1000)}
Function.prototype.cada= function(n){return setInterval(this,(n|1)*1000)}


function cualquiera($dadoValor) {
    if( typeof $dadoValor == "number" ) return Math.random()*$dadoValor ;
    return $dadoValor[ parseInt(cualquiera($dadoValor.length)) ]
}
function hora(k=new Date()) { 
    var n=k,m=n.getMinutes(),s=n.getSeconds();
    return `${n.getHours()}:${m<10?"0"+m:m}:${s<10?"0"+s:s}`
}
function fecha(k=new Date()) {
    var n=k,d=n.getDate(),m=n.getMonth(),a=n.getFullYear();
    return `${d<10?"0"+d:d}/${m<10?"0"+m:m}/${a<10?"0"+a:a}`
}
Array.prototype.cualquiera = function(){return cualquiera(this)}
Number.prototype.cualquiera = function(){return (Math.random()*this).entero()}
Number.prototype.entero = function(){return parseInt(this)}
if( window.swal ) {
async function mostrar($mensaje,$n) {
    await swal.fire({
        text: $mensaje
        , type: $n
        , confirmText: "Continuar"
    })
    graba("Se muestra ["+$mensaje+"]") ;
}
async function error($mensaje) {
    await swal.fire({
        text: $mensaje
        , type: "error"
        , confirmText: "Continuar"
    })
    graba("Se muestra ["+$mensaje+"]","color:red");
}

async function preguntar($mensaje,$default="",$tipo="question"){
    $respuesta = await ___preguntar($mensaje,$default,$tipo)
    graba( "Responde a ["+$mensaje+"] con ["+$respuesta+"]" );
    return $respuesta;
}
async function ___preguntar($mensaje,$default,$tipo) {
    return await swal.fire({
        text: $mensaje
        , value: $default
        ,type: $tipo
        ,showCancelButton: true
        ,confirmButtonText: 'Acepto'
        ,cancelButtonText: 'Cancelo'
        , input: "text"
    })
}
async function confirma($mensaje,$tipo){
    $respuesta = await swal.fire({
        text: $mensaje,
        showCancelButton: true,
        type: $tipo || "question",
        confirmButtonText: 'Sí, confirmo',
        cancelButtonText: 'No, cancelo'
    })
    $respuesta = $respuesta.value ;
    graba( `Responde a [${$mensaje}] con [${$respuesta?"Sí/Acepta":"No/Cancela"}]` )
    return $respuesta;
}
    
}
else {

function mostrar($mensaje,$n) {
    if(!$n)alert($mensaje);    
    graba("Se muestra ["+$mensaje+"]") ;
}
function error($mensaje) {
    if(!$n)alert("[ERROR] "+$mensaje);    
    graba("Se muestra ["+$mensaje+"]","color:red");
}

function preguntar($mensaje,$default="",$tipo="question"){
    $respuesta = prompt($mensaje,$default);
    graba( "Responde a ["+$mensaje+"] con ["+$respuesta+"]" );
    return $respuesta;
}
function confirma($mensaje,$tipo){
    $respuesta = confirm( `[${$tipo}] ${$mensaje}` ) ;
    graba( `Responde a [${$mensaje}] con [${$respuesta?"Sí/Acepta":"No/Cancela"}]` )
    return $respuesta;
}

}// window.swal?
function graba($mensaje,$estilo,$esError) {
    console[$esError?"error":"log"]($mensaje);
    $ = document.createElement("li") ;
    $.setAttribute("style",$estilo);
    $.innerHTML = $mensaje;
    if( document.querySelector("debug") ) {
        document.querySelector("debug").appendChild($)
    } else 
    document.body.appendChild($)
}
function asignar($n){
    return $n
}
var Preguntar = preguntar;
var PREGUNTAR = preguntar;
var Confirma = confirma ;
var CONFIRMA = confirma ;
var Mostrar = mostrar;
var MOSTRAR = MOSTRAR;
var DETAILS = `details summary {
    background: black ; color: white ; padding: 10px ; cursor: pointer ;
}
details>div {
    padding: 10px ;
    border: 1px solid grey ;
}
textarea {
    width: 100% ;
    max-height: 40vh; max-width: 100% ; min-width: 100% ;
}
[conectar],[desconectar] {
    padding: 10px ; color: white ;
}
[conectar]{
    background: green ;
    border-top-left-radius: 10px ;
    border-bottom-left-radius: 10px ;
}
[desconectar]{
    background: red ;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
}`
class HTMLMejoradoElement extends HTMLElement {
    qs($) {return this.shadowRoot.querySelector($)}
    qsa($){return this.shadowRoot.querySelectorAll($)}
    qid($){return this.shadowRoot.querySelector("#"+$)}
    constructor() {
        super() ;
    }
__agregarEvento( $texto ) {
    var $=new Date(),$h=$.getHours(),$m=$.getMinutes(),$s=$.getSeconds();if($h<10)$h="0"+$h;if($m<10)$m="0"+$m;if($s<10)$s="0"+$s;this.qid("idEventos").innerHTML+="<li>"+$h+":"+$m+":"+$s+" > "+$texto+"</li>";}
hora() {
    var $ = new Date() ;
    var h = $.getHours(), m = $.getMinutes(), s = $.getSeconds() ;
    if(m<10)m="0"+m;if(s<10)s="0"+s;
    return `${h}:${m}:${s}`;
}

}
var PRIMER='querySelector',TODOS=CADA='querySelectorAll',DOC=document,ELEM=CREAR='createElement',AGREGAR='appendChild',GATT='getAttribute',SATT='setAttribute',HATT='hasAttribute',CODIGO="innerHTML",CLICK="onclick",$summary=`details>summary {background:black;color:white;padding:5px;cursor:pointer;}`,$main=`details>main{padding:10px;border:1px solid grey}`;function fnScript($archivo,$fnOk){$s=DOC[CREAR]("script");$s.src=$archivo;$s.onload=$fnOk;DOC.head.appendChild($s)} function fnLink($archivo,$fnOk){$s=DOC[CREAR]("link");$s.href=$archivo;$s.rel="stylesheet";$s.onload=$fnOk;DOC.head.appendChild($s)};
var cssDetails=`details summary {background: black ;color: white ;padding: 10px ;cursor: pointer ;} details>div {padding: 10px ;background: white ;border: 1px solid grey ;border-bottom-left-radius: 10px ;border-bottom-right-radius: 10px ;text-shadow: 2px 2px 2px grey ;}`;
function fnEvn() {
    
}
;class EsReloj extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div >
    <slot></slot>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $this = this ;
    setTimeout( function() {
        var hora = $this.querySelector( ".hora" ) ;
        var minutos = $this.querySelector( ".minutos" ) ;
        var segundos = $this.querySelector( ".segundos" ) ;
        var dia = $this.querySelector( ".dia" ) ;
        var mes = $this.querySelector( ".mes" ) ;
        var anio = $this.querySelector( ".año" ) ;
        var nombredia = $this.querySelector( ".nombredia" ) ;
        var nombremes = $this.querySelector( ".nombremes" ) ;

        this.$control = setInterval(
            function () {
                let $tiempo = new Date() ;
                let ref = [ 
                    $tiempo.getHours()
                    , $tiempo.getMinutes()
                    , $tiempo.getSeconds()
                    , $tiempo.getDate()
                    , $tiempo.getMonth()+1
                    , $tiempo.getFullYear()
                    , $tiempo.getDay() 
                ] ;
                let listaDias = "Domingo.Lunes.Martes.Miércoles.Jueves.Viernes.Sábado".split(".");
                
                if(hora)hora[CODIGO] = ref[0] < 10 ? "0"+ref[0] : ref[0] ;
                if(minutos)minutos[CODIGO] = ref[1] < 10 ? "0"+ref[1] : ref[1] ;
                if(segundos)segundos[CODIGO] = ref[2] < 10 ? "0"+ref[2] : ref[2] ;
                if(dia)dia[CODIGO] = ref[3] < 10 ? "0"+ref[3] : ref[3] ;
                if(mes)mes[CODIGO] = ref[4] < 10 ? "0"+ref[4] : ref[4] ;
                if(anio)anio[CODIGO] = ref[5] < 10 ? "0"+ref[5] : ref[5] ;
                if(nombredia)nombredia[CODIGO] = listaDias[ref[6]] ;
                if(nombremes)nombremes[CODIGO] = "Enero.Febrero.Marzo.Abril.Mayo.Junio.Julio.Agosto.Septiembre.Octubre.Noviembre.Diciembre".split(".")[ref[4]-1]
            }
            , 50
        )
    },10 );
}
    };window.customElements.define( "es-reloj", EsReloj );

;class PantallaSplash extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
:host {
    user-select: none ;
}

#idFondo {
    position: fixed ;
    top: 0 ; 
    left: 0 ;
    width: 100% ; height: 100vh ;
    
    background: rgba( 0,0,0, .4 ) ;
    backdrop-filter: blur( 4px );
}

#idPrincipal {
    position: fixed ;
    top: 50% ;
    left: 50% ;
    max-height: 100vh ;
    transform: translate( -50%, -50% ) ;
}

:host[cerrado] main {
    display: none ;
}</style>
<main>
    <div id="idFondo"></div>
    <div id="idPrincipal">
        <slot />
    </div>
</main>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    var $idFondo = $.shadowRoot.querySelector("#idFondo") ;
    var $idPrincipal = $.shadowRoot.querySelector("#idPrincipal") ;
    var $zIndex = $[GATT]("plano")||$[GATT]("index")||$[GATT]("zIndex") ;
    $zIndex = Number($zIndex) ;
    setTimeout(x=>{
        if($[HATT]("blur")){
            var f = "blur("+$[GATT]("blur")+"px)!important";
            $idFondo.style["backdrop-filter"]=f;
            console.log("Hola!",f)
        }
        console.log($idFondo.style["backdrop-filter"])
    },100);
    console.log($[GATT]("blur"),$idFondo)
    $idFondo.style.zIndex = $zIndex || 45 ;
    $idPrincipal.style.zIndex = $idFondo.style.zIndex + 1 ;
    
    if( !($[GATT]("sin-click")||$[GATT]("no-click")) )
    $idFondo.onclick = x=>$.cerrar();
    
    var $cierraEn = $[GATT]("segundos") ;
    if( $cierraEn ) setTimeout(f=>$idFondo.click(), $cierraEn*1000) ;
}

cerrar() {
    this.style.display = "none" ;
}
mostrar($){
    this.style.display="block";
    this.focus();
    if(typeof $ == "string") this.innerHTML=$;
    if($ && this.hasAttribute("segundos")){
        setTimeout(()=>{this.cerrar();},this.getAttribute("segundos")*1000);
    }
}
    };window.customElements.define( "pantalla-splash", PantallaSplash );

;class LoremIpsum extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
:host {
    background: inherit ;
}
div {
    text-align: justify ;
    all: initial ;
}</style>
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, aut necessitatibus quam iste modi minima in sint perspiciatis. Veritatis, cum temporibus pariatur itaque tenetur aut qui laborum iure illum eos.</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.veces = this.getAttribute("veces") || 1 ;
    for( var i = 0 ; i < this.veces ; i++ )
        this.shadowRoot.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, aut necessitatibus quam iste modi minima in sint perspiciatis. Veritatis, cum temporibus pariatur itaque tenetur aut qui laborum iure illum eos. </p>`.repeat(this.veces)
}
    };window.customElements.define( "lorem-ipsum", LoremIpsum );

;class ParaSeleccionar extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div >
    <slot />
</div>            `;
            if( this.render ) this.render() ; 
        }
render() { var $=this;
    
    if( !window.Selecto ) {
        return fnScript("https://daybrush.com/selecto/release/latest/dist/selecto.min.js", x=>$.render())
    }
    
    $.objeto = new Selecto({
        container: $.qs("div")
        , selectableTargets: Array.from($.children)
        , toggleContinueSelect: "shift"
    });
    
    $.objeto.on( "select", function($e){
        if( window[ $[HATT]("eventos") ] ) {
            window[ $[GATT]("eventos") ]( $e ) ; 
        }
        else {
            $e.selected.forEach( x => x.classList.add("seleccionado") ) ;
            //$e.removed.forEach( x => x.classList.remove("seleccionado") );
            console.log( $e )
        }
    })
    $.objeto.on( "selectStart" , function($e){
        Array.from($.children).forEach( x=>x.classList.remove("seleccionado") )
    })
    
}
    };window.customElements.define( "para-seleccionar", ParaSeleccionar );

;class HaceResponsive extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />            `;
            if( this.render ) this.render() ; 
        }

    };window.customElements.define( "hace-responsive", HaceResponsive );

;class EsMenu extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
    :host {
        display: block ;
    }

    :host([posicion="1"]) details {
        border-bottom-right-radius: 10px ;
        top: 0 ;
        left: 0 ;
    }
    :host([posicion="2"]) details {
        border-bottom-left-radius: 10px ;
        top: 0 ;
        right: 0 ;
    }
    :host([posicion="3"]) details {
        border-top-right-radius: 10px ;
        bottom: 0 ;
        left: 0 ;
    }
    :host([posicion="4"]) details {
        border-top-left-radius: 10px ;
        bottom: 0 ;
        right: 0 ;
    }

    :host([posicion="2"]) summary, :host([posicion="4"]) summary {
        text-align: right ;
    }
    details {
        position: fixed ;
        min-width: 20% ;
        overflow: hidden ;
        z-index: 1002;
    }

    
    details summary {
        padding: 10px ;
        background: black ;
        color: white ;
        cursor: pointer ;
        text-align: center ;
        list-style-type: "≡";
        transition: .3s all;
    }
    
    details summary:hover {
        background: #222 ;
    }
    
    details[open] summary {
        list-style-type: "x";
    }
    
    details>div {
        padding: 20px ; 
        background: rgba( 0,0,0, 0.7 ) ;
        color: white ;
        backdrop-filter: blur(4px);
        max-width: 500px ;
        max-height: 80vh;
        overflow: auto ;
    }
    
    
</style>
<details >
    <summary >
        ${this.titulo || "Menú" }
    </summary>
    <div>
        <slot></slot>
    </div>
</details>
            `;
            if( this.render ) this.render() ; 
        }
primeraVez = true ;

get titulo()        { return this[GATT]("titulo") ; }
set titulo( $valor ){        this[SATT]( "titulo", $valor ) ; }

attributeChangedCallback( $queAtributo, $valorAnterior, $valorNuevo )
{var $=this;
    if( $.primeraVez ) $.primeraVez = false ;
    else {
        if( $queAtributo == "titulo" )
        {
            var $q = $.qs( "summary" ) ;
            if($q) $q[CODIGO] = $valorNuevo ;
        }
    }
}

static get observedAttributes() { return "titulo".split(".") ; }
abrir(){this.qs("details")[SATT]("open",1)}
cerrar() {this.qs("details")[RATT]( "open" )}
intercalar(){if(this.qs("details")[HATT]("open"))this.cerrar();else this.abrir()}
    };window.customElements.define( "es-menu", EsMenu );

;class ConsolaEruda extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ;
    color: white ;
    cursor: pointer ;
    padding: 5px ;
}

summary+div {
    border: 1px dotted grey ;
    padding: 10px ;
}</style>
<details>
    <summary>Eruda - <span>Instalando</span></summary>
    <div>
        <button habilitar>Habilitar</button>
        <button deshabilitar>Deshabilitar</button>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if(!window.eruda){fnScript("https://gorosito.red/dame/eruda.js",x=>$.render());return}
    if($[HATT]("auto")){
        setTimeout( x => $.conectar(), 300 );
    }
    $.activado=false;
    $$.querySelector("button[habilitar]").onclick=()=>$.conectar();
    $$.querySelector("button[deshabilitar]").onclick=()=>$.desconectar()
}
conectar() {
    var $=this,$$=$.shadowRoot;
    $$.querySelector("span").innerHTML = "Iniciado";
    if($.activado)return;
    eruda.init();
    $.activado=true
}

desconectar() {
    var $=this;
    if(!$.activado)return;
    eruda.destroy();
    $.activado=false;
}




    };window.customElements.define( "consola-eruda", ConsolaEruda );

;class PresionaTecla extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<details >
    <summary>
        Tecla <span>Ninguna</span>
    </summary>
    <p>Control: <input type="checkbox" disabled id="idTeclaControl"></p>
    <p>Shift: <input type="checkbox" disabled id="idTeclaShift"></p>
    <p>Alt: <input type="checkbox" disabled id="idTeclaAlt"></p>
    <p>AltDer: <input type="checkbox" disabled id="idTeclaAltGr"></p>
    <p>Ventanita: <input type="checkbox" disabled id="idTeclaMeta"></p>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    window.addEventListener( "keypress", function(e){
        $.fnTeclaPresionada(e) ;
    }, false ) ;
    window.addEventListener( "keydown", function(e){
        $.fnTeclaAbajo(e) ;
    }, false ) ;
    window.addEventListener( "keyup", function(e){
        $.fnTeclaArriba(e) ;
    }, false ) ;
    
}

fnTeclaPresionada( $tecla ) {var $ = this ;
    $.qs("span")[CODIGO] = $tecla.code ;
    if($tecla.ctrlKey) $.qs("#idTeclaControl")[RATT]("checked") ;
}
fnTeclaAbajo( $tecla ) {var $=this ;
    if($tecla.ctrlKey) $.qs("#idTeclaControl")[SATT]("checked","checked") ;
}
fnTeclaArriba( $tecla ) {var $ = this ;
}
    };window.customElements.define( "presiona-tecla", PresionaTecla );

;class SeguirMouse extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div ><slot /></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $this = this ;
    var $slot = $this.shadowRoot.querySelector( "div" ) ;
    
    setTimeout(
        function() {
            var $x = $this.querySelectorAll( ".seguir-x" ) ;
            var $y = $this.querySelectorAll( ".seguir-y" ) ;
            
            window.addEventListener(
                `mousemove`
                , function( $mouse ) {
                    console.log( $x,$y );
                    $x.forEach( x => x.innerHTML = $mouse.clientX ) ;
                    $y.forEach( x => x.innerHTML = $mouse.clientY ) ;
                }
            )
        }
        , 100
    )
}
    };window.customElements.define( "seguir-mouse", SeguirMouse );

;class EsNotificaciones extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
:host {
    background: rgba( 255,255,255, .8 );
    backdrop-filter: blur(4px);
    
}

summary {
    background: black ; color: white ;
    padding: 5px ; cursor: pointer;
}

summary+div {
    padding: 10px ;
    border: 1px solid grey ;
}</style>
<details >
    <summary>Notificación - <span>No habilitadas</span></summary>
    <div>
        <button avisar>Avisar</button>
        <button cerrar>Cerrar</button>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if( window.AppInventor ) ;
    else if( window.Notification ) {
        Notification.requestPermission().then(function($estadoNotificaciones){
            if( $estadoNotificaciones == "granted" ) $.web = true ;
            $$[PRIMER]("summary>span").innerHTML = "Habilitadas";
        });
    }
    else {
        $.web = false ;
    }
    $$[PRIMER]("button[avisar]").onclick = z=>$.notificar();
}

notificar($mensaje) {
    var $=this,$$=$.shadowRoot;
    if($mensaje===undefined)$mensaje=$[GATT]("mensaje")||"";
    if(window.AppInventor){
        AppInventor.setWebViewString( "notificar:"+$mensaje ) ;
    }
    else if( $.web ) {
        $.objeto = new Notification(
            $[GATT]("titulo") || "Aplicación"
            , {
                body: $mensaje
                , icon: $.getAttribute("icono") || null 
            }
        );
        $.objeto.onclick = function() {
            eval( "("+$[GATT]("al-aceptar")+"(new Date()));" );
        }
        $.objeto.onclose = function() {
            eval( "("+$[GATT]("al-cerrar")+"(new Date()));" );
        }
    }
    else {
        Swal.fire("Aplicación", $mensaje) ;
    }
    
}

cerrar() {
    this.objeto.close() ;
    this.objeto = null ;
}
    };window.customElements.define( "es-notificaciones", EsNotificaciones );

;class LocalizacionGeografica extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}
summary+div {
    padding: 10px ;
}
</style>
<details>
    <summary>Localización geográfica</summary>
    <div>
        <div><button>Averiguar</button></div>
        <div>Latitud <input type="number" id="latitud"></div>
        <div>Longitud <input type="number" id="longitud"></div>
        <div>Altitud <input type="number" id="altitud"></div>
        <div>Velocidad <input type="number" id="velocidad"></div>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    $.shadowRoot[PRIMER]("button").onclick=x=>{
        navigator.geolocation.getCurrentPosition(function($$){$.detecto($$)});
    };
    if($[HATT]("auto"))$.shadowRoot[PRIMER]("button").click();
}
detecto( $datos ) {
    var $=this,$$=$.shadowRoot;
    $$[PRIMER]("#latitud").value = $datos.coords.latitude ;
    $$[PRIMER]("#longitud").value = $datos.coords.longitude ;
    $$[PRIMER]("#altitud").value = $datos.coords.altitude ;
    $$[PRIMER]("#velocidad").value = $datos.coords.speed ;
    if($[HATT]("ondata"))eval($[GATT]("eventos") + "($datos)" ) ;
}
    };window.customElements.define( "localizacion-geografica", LocalizacionGeografica );

;class CodigoJs extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}
button {
    padding: 10px ; border-radius: 10px; border:none;
}
[invocar]{background:green}
fieldset {
border-radius:10px;
}</style>
<details open>
    <summary>Código JS</summary>
    <div>
        Comando: <input type="text" placeholder="alert( 'Bienvenido' )">
        <button>Ejecutar</button>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot, QS = "querySelector" ;
    $$[QS]("input").onkeyup = function($tecla) {
        if(/return|enter/i.test($tecla.code))eval( "("+this.value+")" )
    };
    $$[QS]("button").onclick = function(){
        eval( "("+$$[QS]("input").value+")" )
    }
}
    };window.customElements.define( "codigo-js", CodigoJs );

;class EsGrilla extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<svg>
    <circle cx="16%" cy="16%" r="15%" fill="#555" ></circle>
    <circle cx="46%" cy="16%" r="15%" fill="#555" ></circle>
    <circle cx="76%" cy="16%" r="15%" fill="#555" ></circle>

    <circle cx="16%" cy="46%" r="15%" fill="#555" ></circle>
    <circle cx="46%" cy="46%" r="15%" fill="#555" ></circle>
    <circle cx="76%" cy="46%" r="15%" fill="#555" ></circle>

    <circle cx="16%" cy="76%" r="15%" fill="#555" ></circle>
    <circle cx="46%" cy="76%" r="15%" fill="#555" ></circle>
    <circle cx="76%" cy="76%" r="15%" fill="#555" ></circle>

</svg>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $ = this;
    var $svg = $.qs("svg");
    if( $[HATT]("ancho") && $[HATT]("alto") ) {
        $svg.style.width = $[GATT]("ancho") ;
        $svg.style.height = $[GATT]("alto") ;
    }
    else if( $[HATT]("ancho") ||  $[HATT]("alto") ) {
        $svg.style.width = $[GATT]("ancho") || $[GATT]("alto") || 200 ;
        $svg.style.height = $svg.style.width ;
    }
    else {
        $svg.style.width = 200 ;
        $svg.style.height = 200 ;
    }
    $.item = [] ;
    $.anterior = [] ;
    $.cambio = [] ;
    $.objeto = [] ;
    $.funciones = [] ;
    $.qsa("circle").forEach(function(x,orden){
        x.orden = orden;
        $.item.push( false ) ;
        $.anterior.push( false ) ;
        $.cambio.push( false ) ;
        $.objeto.push( this );
        x.onclick = function() {
            $.eventos(this.orden);
        }
        x.onmousedown = x.ontouchstart = function() {
            $.item[ this.orden ] = true ;
            this.style.fill = "red" ;
        }
        x.onmouseup = x.ontouchend = function() {
            $.item[ this.orden ] = false ;
            this.style.fill="#555";
        }
        x.onmouseout = function() {
            $.item[this.orden] = false ;
            this.style.fill="#555" ;
        }
    })
    setInterval(
        function() {
            $.item.forEach(function(cu,or){
                if( $.anterior[or] != $.item[or] ) $.cambio[or] = true ;
                else $.cambio[or] = false ;
                $.anterior[or] = $.item[or] ;
            })
            $.funciones.forEach(function(fn){
                fn( $.item, $.anterior, $.cambio )
            });
            
        }
        , 1000/10
    )
    if( $[HATT]("eventos") ) $.eventos_ = window[ $[GATT]("eventos") ] ;
    $.timer = null ;
}

eventos($codigo) {
    if( this.eventos_ ) {
        if( typeof this.eventos_ == "function" ) {
            this.eventos_( $codigo ) ;
        }
        else {
            this.eventos_[$codigo]() ;
        }
    }
    else {
        console.log( "Presionado " + $codigo )
    }
}

suscribir(fn) {
    this.funciones.push(fn)
}

eliminar(fn) {
    this.funciones = [] ;
}

desuscribir() {
    this.funciones = [] ;
}
    };window.customElements.define( "es-grilla", EsGrilla );

;class PegarImagen extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Pegar imagen <input type="checkbox" disabled></summary>
    <div>
        
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $ = this;
    document.addEventListener(
        'paste'
        , async function($evento) {
            $evento.preventDefault();
            const clipboardItems = 
                typeof navigator?.clipboard?.read === 'function' 
                ? await navigator.clipboard.read() 
                : $evento.clipboardData.files
            ;
            for (const clipboardItem of clipboardItems) {
                let blob;
                if (clipboardItem.type?.includes('image/')) {
                    blob = clipboardItem ;
                    appendImage(blob) ;
                } else {
                    const imageTypes = 
                        clipboardItem.types?.filter(
                            function(type){
                                return type.includes('image/')
                            }
                        )
                    ;
                    for (const imageType of imageTypes) {
                        blob = await clipboardItem.getType(imageType);
                        appendImage(blob);
                    }
                }
            }
        }
    );
    
    function appendImage(blob) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        $.qs("div").append(img);
        $.qs("input[type]").checked = true ;
        if( $[HATT]("eventos") ) {
            window[ $[GATT]("eventos") ]( img, [...$.qs("div").children] )
        }
    }
}
imagenes () {
    return [...this.qs("div").children]
}
    };window.customElements.define( "pegar-imagen", PegarImagen );

;class DondeEstamos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}</style>
<details>
    <summary>Averiguando</summary>
    <div>+Info</div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if( typeof window == "undefined" ) {
        if( typeof process == "undefined" ) return $.us("Estamos en Node.js");
        return $.us("Estamos en NW.js probablemente")
    }
    if( window.AppInventor ) return $.us("Estamos en AppInventor");
    var ua=navigator.userAgent;
    if( /chrom/i.test(ua)  ) {
        if(window.showOpenFilePicker)return $.us("Estamos en Chrome de Escritorio");
        return $.us("Estamos en Chrome de Navegador");
    }
    $.us("Otro")
}

us(n){this.qs("summary")[CODIGO]=n}
    };window.customElements.define( "donde-estamos", DondeEstamos );

;class TablaOrdenable extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div>
    <slot />
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.delay = this[GATT]("animable") ;
}

ordenar( $caracteristica, $modo ) {
    var $tabla, $filas, $seCambia, $i, $cadaUno, $elSiguiente, $deberiaCambiar ;
    $tabla = this ;
    $seCambia = true ;
    while( $seCambia ) {
        $seCambia = false ;
        $filas = this.children ;
        for( $i = 0 ; $i < ($filas.length-1); $i++ ) {
            $deberiaCambiar = false ;
            $cadaUno = $filas[$i] ;
            $elSiguiente = $filas[$i+1] ;
            if( $caracteristica($cadaUno,$elSiguiente) )
            {
                $deberiaCambiar = true ; break ;
            }
        }
        if( $deberiaCambiar ) {
            $filas[$i].parentNode.insertBefore($filas[$i+1], $filas[$i]);
            $seCambia = true ;
        }
    }
}

filtrar($fnCriterios) {
    var $ = this, $esTabla = $.children[0].tagName == "TABLE" ;
    Array.from(
        $esTabla 
        ?   $.children[0].querySelectorAll("tbody tr")
        :   $.children
    ).forEach($cadaUno=>{
        $cadaUno.style.display = $[GATT]("display") || ($esTabla?"table-row":"block");
        $cadaUno.style.transform = "" ;
    });
    Array.from(
        $esTabla 
        ?   $.children[0].querySelectorAll("tbody tr")
        :   $.children
    ).forEach($cadaUno=>{
        if(!$fnCriterios($cadaUno)) {
            $cadaUno.style.transition = $.delay + "s all" ;
            $cadaUno.style.transform = "scale(0.1)" ;
            setTimeout( x => {
                $cadaUno.style.display="none";
            },$.delay*1000)
        }
    })
}
    };window.customElements.define( "tabla-ordenable", TablaOrdenable );

;class MenuLateral extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
details  {
    z-index: 5000;
    position: fixed ;
    ${ this[HATT]("der") ? "right:" : "left:" } 0;
    top: 50% ;
    transform: translate( 0, -50% ) ;
    background: rgba( 0,0,0, .6 ) ;
    color: white ;
    border-top-${this[HATT]("der")?"left":"right"}-radius: 10px ;
    border-top-${this[HATT]("der")?"left":"right"}-radius: 10px ;
}
summary {
    background: black; padding: 10px ;
    transition: 0.2s all 
    cursor: pointer ;
}
summary:hover {
    background: #222;
}
details:not([open]) summary {
    transform: translate(-1%) rotate(-90deg)
}

div {
    padding: 10px ;
}</style>
<details >
    <summary>Menú</summary>
    <div>
        <slot />
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }

    };window.customElements.define( "menu-lateral", MenuLateral );

;class SiPagina extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<?php
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    document.addEventListener("pagevisibilitychange", function() {
        if( document.visibilityState == "visible" ) 
            try {
                $[GATT]("visible")(new Date()) ;
            } catch(e){console.log("Error", e)}
        else
            try {
                $[GATT]("sale")(new Date())
            }catch(e){console.log("Error", e)}
    },true)
}
    };window.customElements.define( "si-pagina", SiPagina );

;class AbrirArchivo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}

nav {
    text-align: center ;
}
textarea, select {
    width: 100%;
    min-height: 30vh;
}
[copiar] {
    width: 100%;
}</style>
<details open >
    <summary>
        Archivo/s - <span>Podés ya elegir un archivo</span> - <input disabled type="checkbox" />
    </summary>
    <div>
        <nav botonera>
            <button elegir>Elegir y Abrir</button>
            <button guardar>Grabar</button>
            <button cerrar>Cerrar archivo</button>
        </nav>
        <button copiar>Copiar</button>
        <textarea rows="8" cols="40" width="100%"></textarea>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render ()
{
    var $=this,$$=$.shadowRoot;
    console.log( "Creando Archivo" )
    $.qs("button").onclick = async function() {
        $.abrir()
    };
    $.qs("[copiar]")[CLICK]=function(){
        $$[PRIMER]("textarea").select() ;
        document.execCommand( "copy" ) ;
    };
    $.qs("[cerrar]")[CLICK]=async function() {
        if( $.archivos ) delete $.archivos ;
        if( !$.archivos ) $$[PRIMER]("input").checked = false ;
        $.qs("textarea").value="";
    };
    $.qs("[guardar]")[CLICK] = function() {
        $.grabar( $.qs("textarea").value );
    }
}

async grabar( $nuevoTexto ) {
    var $=this,$$=$.shadowRoot;
    
    $$[PRIMER]("span")[CODIGO]="Grabando";
    if( arguments.length == 0 )  var $nuevoTexto = $$[PRIMER]("textarea").value ;
    if( $.objeto ) {
        var Grabador = await $.archivos[0].createWritable() ;
        await Grabador.write( $nuevoTexto ) ;
        await Grabador.close() ;
    }
    $$[PRIMER]("span")[CODIGO]="Grabado";
}

async abrir(){
    var $=this,$$=$.shadowRoot;
    const blobToBase64 = blob => {
        blob = new Blob([blob]);
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise(resolve => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    };
    
    var sonVarios = $[HATT]("varios") ;
    try {
        $$[PRIMER]("span")[CODIGO] = "Abriendo" ;
        $.archivos = await showOpenFilePicker({ multiple: sonVarios }) ;
        if( $.archivos.length == 1 ) {
            $.objeto = await $.archivos[0].getFile() ;
            $$[PRIMER]("span")[CODIGO] = `Abierto [${$.objeto.name}] (${$.objeto.size}k)`;
            if( $[HATT]("eventos") ) {
                var $oev = window[ $[GATT]("eventos") ] ;
                window.tt = $.objeto ;
                console.log( 299, $.objeto );
                if( typeof $oev == "function" ) 
                {
                    console.log("Es función");
                    $oev( 
                        await $.objeto.text()
                        , $.objeto.name
                        , $.objeto 
                        , blobToBase64
                    )
                }
                if( typeof $oev == "object" ) {
                    if( $.objeto.name.lastIndexOf(".") > -1 ) {
                        var Extension = $.objeto.name.substr( $.objeto.name.lastIndexOf(".")+1 ) ;
                        try {
                            $oev[ Extension ]( await $.objeto.text(), $.objeto.name, $.objeto, blobToBase64 ) ;
                        }catch(e){}
                    }
                }
            }
            console.log( 2000, $.objeto, $.objeto.text() ) ;
            $.contenido = $.objeto.text() ;
            $$[PRIMER]("textarea").value = await $.contenido ;
            $$[PRIMER]("input[type=checkbox]").checked = true ;
        }
    }catch($e) {
        console.log( "ERROR", $e ) ;
    }
    
}
    };window.customElements.define( "abrir-archivo", AbrirArchivo );

;class AbrirCarpeta extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}

nav {
    text-align: center ;
}
textarea, select {
    width: 100%;
    min-height: 30vh;
}
[copiar] {
    width: 100%;
}</style>
<details open >
    <summary>
        Carpeta - <span>Podés ya elegir una carpeta</span> - <input disabled type="checkbox" />
    </summary>
    <div>
        <nav botonera>
            <button elegir>Elegir y Abrir</button>
            <button cerrar>Cerrar carpeta</button>
        </nav>
        <button copiar>Copiar</button>
        <select multiple>
            <option>Ningún archivo</option>
        </select>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
async abrir( $carpeta ) {
    var $=this,$$=$.shadowRoot;
    if( arguments.length == 0 ) {
        if( !$.carpeta ) return ;
        $carpeta = $.carpeta ;
    }
    console.log( $.carpeta );
    $$[PRIMER]("select")[CODIGO]="";
    $.archivos = [] ;
    var c = 0 ;
    for await ( var CadaArchivo of $.carpeta.values() ) {
        $.archivos.push( CadaArchivo ) ;
        $$[PRIMER]("select")[CODIGO]+=`<option key="${c}" ondblclick="fnCarpetaAbrir(this)" onkeyup="fnCarpetaAbrir(this,event)" value="${CadaArchivo.name}">${ CadaArchivo.kind == "directory" ? "&#128193; " : "&#128190; " }${CadaArchivo.name}</option>` ;
        c++ ;
    }
    $$[PRIMER]("span")[CODIGO] = "Abierto" ;
    window.fnCarpetaAbrir = async function( $this, $teclado ) {
        var Carp = $.archivos[ +$this[GATT]("key") ];
        console.log( Carp, $.archivos, $this[GATT]("key") ) ;
        if( $teclado && $teclado.code=="Enter" || !$teclado ) 
        {
            $.archivos = [] ;
            var c = 0 ;
            for await( var CadaArchivo of Carp.values() ) {
                $.archivos.push( CadaArchivo ) ;
            }
            $.abrir( Carp );
        }
    };
}

render ()
{
    var $=this,$$=$.shadowRoot;
    $$[PRIMER]("button").onclick = async function() {
        try {
            $$[PRIMER]("span")[CODIGO] = "Abriendo" ;
            $.carpeta = await showDirectoryPicker() ;
            $.abrir();
        }catch($e) {
            console.log( "ERROR", $e ) ;
            $$[PRIMER]("span")[CODIGO] = "No se pudo abrir" ;
        }
    };
    $$[PRIMER]("[cerrar]")[CLICK]=async function() {
        if( $.carpeta ) delete $.carpeta ;
        if( !$.carpeta ) $$[PRIMER]("input").checked = false ;
        $$[PRIMER]("span")[CODIGO] = "No hay carpeta abierta" ;
        $$[PRIMER]("select")[CODIGO] = "<option>Ningún archivo</option>" ;
    };
}

async grabar( $nuevoTexto ) {
    var $=this,$$=$.shadowRoot;
    $$[PRIMER]("span")[CODIGO]="Grabando";
    if( arguments.length == 0 )  var $nuevoTexto = $$[PRIMER]("textarea").value ;
    if( $.objeto ) {
        var Grabador = await $.archivos[0].createWritable() ;
        await Grabador.write( $nuevoTexto ) ;
        await Grabador.close() ;
    }
    $$[PRIMER]("span")[CODIGO]="Grabado";
}
    };window.customElements.define( "abrir-carpeta", AbrirCarpeta );

;class EsPersistencia extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}</style>
<details >
    <summary>
        Persistencia - <span modo>Offline</span> - <span acciones>Iniciando</span>
    </summary>
    <div>
        <slot hidden></slot>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    setTimeout(function(){
        $.variables = $.innerHTML.trim().split(",").map(x=>x.trim()) ;
    },1);
    if( window.AppInventor ) {
        $.objeto = indexedDB.open( "persistencia", 1 ) ;
    }
    $.eventos = window[ $[GATT]("eventos") ] ;
}

setCookie(c_name, value, expiredays) {  
    var exdate = new Date();  
    exdate.setDate(exdate.getDate() + expiredays);  
    document.cookie = c_name + "=" + value + ";path=/" + ((expiredays ==null) ? "" : ";expires=" + exdate.toGMTString());  
} 
getCookie(name) {  
    var dc = document.cookie;  
    var prefix = name +"=";  
    var begin = dc.indexOf("; " + prefix);  
    if (begin == -1) {  
        begin = dc.indexOf(prefix);  
        if (begin != 0)return null;  
    } else {  
        begin += 2;  
    }  
    var end = document.cookie.indexOf(";", begin);  
    if (end == -1) {  
        end = dc.length;  
    }  
    return unescape(dc.substring(begin + prefix.length, end));  
} 
promiseReq(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

actualizar($nombre, $valor) {
    if( !$nombre ) return ;
    if( window.AppInventor ) {
        setCookie( $nombre, $valor ) ;
    }
    else {
        localStorage.setItem( $nombre, $valor );
    }
    if( this.eventos ) {
        if( typeof this.eventos=="function" ) this.eventos($nombre,$valor) ;
        else if( this.eventos[$nombre] ) this.eventos[$nombre]($valor);
    }
}
grabar($nombre,$valor){
    this.actualizar($nombre,$valor)
}
leer( $nombre ) {
    if( window.AppInventor ) {
        return getCookie($nombre) ;
    }
    return localStorage.getItem($nombre);
}
json($nombre,$grabar) {
    if( arguments.length < 2 )  {
        var r5 = this.leer($nombre);
        try {r5=JSON.parse($nombre)}catch(e){console.error(e);}
        return r5;
    }
    this.grabar( $nombre, JSON.stringify($grabar) );
}
    };window.customElements.define( "es-persistencia", EsPersistencia );

;class EsFicha extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
svg {
    border-top-left-radius: 100px ;
    border-bottom-left-radius: 100px ;
}</style>
<svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 700 200">
 <g>
  <image 
    x="0" y="0" height="200" width="100%" 
    id="idimagen1" 
    href="https://www.revistaneo.com/sites/default/files/2020-10/fondos-padres.jpg" 
    preserveAspectRatio="xMidYMid slice"/>
  <ellipse 
    ry="65" rx="65" 
    id="svg_1" 
    cy="96.5" cx="114" 
    stroke="#000" fill="#fff"/>
  <text 
    xml:space="preserve" text-anchor="start" 
    font-family="Noto Sans JP" 
    font-size="24" 
    stroke-width="0" y="53.5" x="212" stroke="#000" fill="#CBFFFF"
    id="idTexto"
  >
      Probando
  </text>
  <foreignObject x="210" y="70" width="480" height="210" id="idTexto2" style="color:white">
      <slot ></slot>
  </foreignObject>
 </g>
</svg>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $titulo = this.shadowRoot.querySelector("#idTexto") ;
    var $texto = this.shadowRoot.querySelector("#idTexto2") ;
    
    $titulo.innerHTML = this.getAttribute("dice") || "Hola" ;
    
}
    };window.customElements.define( "es-ficha", EsFicha );

;class BotonReiniciar extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<br />
<b>Warning</b>:  file_get_contents(/home/oy000067/public_html/componentes/boton-reiniciar/boton-reiniciar.css): failed to open stream: No such file or directory in <b>/home/oy000067/public_html/webcomponents.php</b> on line <b>20</b><br />
</style>
<button><slot></slot></button>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.onclick = function() {
        location.reload() ;
    }
}
    };window.customElements.define( "boton-reiniciar", BotonReiniciar );

;class BotonAbajo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<button><slot></slot></button>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.onclick = function() {
        window.scrollTo(
            { 
                  top: document.body.scrollHeight
                , behavior: "smooth" 
            }
        ) ;
    }
}
    };window.customElements.define( "boton-abajo", BotonAbajo );

;class EsBoton extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
* {
    box-sizing: border-box ;
}

button {
    all: initial ;
    border: 2px solid grey ;
    border-radius: 10px ;
    padding: 5px ;
    background: blue ;
    color: white ;
    width: 100% ;
    text-align: center ;
}
button:hover {
    border-color: black ;
}</style>
<div>
    <slot />
</div>
            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $this = this ;
    var $button = $this.shadowRoot.querySelector( "div" ) ;
    var $atri = $this.getAttribute( "para" ) ;
    
    var $p = document.querySelector("pantalla-splash");

    if( /impr/gi.test($atri) ) {
        this.onclick = ()=>window.print() ;
    }
    else if( /reini|actua|refres|reset/i.test( $atri ) ) {
        this.onclick = ()=>{
            if( $p ) { $p.style.display = "block" ; $p.innerHTML = "Reiniciando" }
            location.reload() ;
        }
    }
    else if( /atr/i.test($atri) ) {
        this.onclick = ()=>{
            if( $p ) { $p.style.display = "block" ; $p.innerHTML = "Atrás" }
            history.back() ;
        }
    }
    else if( /https/i.test($atri) ) {
        this.onclick = () => {
            if(/http:/i.test(location.href)) {
                if( $p ) { $p.style.display = "block" ; $p.innerHTML = "Actualizando" }
                location.href = location.href.replace( "http://", "https://" ) ;
            }
        }
    }
    else if( /compl|full/i.test($atri) ) {// No es posible
        this.onclick = () => {document.body.requestFullScreen() ;}
    }
    else if( /arri|sub/i.test($atri) ) {
        this.onclick = () => {
            console.log("Subiendo");
            window.scrollTo({
            top: 0, left: 0
            , behavior: /lento|desp|sua/i.test($atri) ? "smooth" : "auto"
        })}
    }
}
    };window.customElements.define( "es-boton", EsBoton );

;class FondoPantalla extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
div {
    position: fixed ;
    top: 0 ;
    left: 0 ;
    
    width: 100% ;
    height: 100vh ;
    
    z-index: -10 ;
    
    background-color: white ;
    background-size: cover ;
    background-position: center center ;
}</style>
<div ></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.imagen = this.getAttribute( "fondo" ) || this.getAttribute( "imagen" ) || this.getAttribute( "foto" ) || null ;
    this.zIndex = this.getAttribute( "z-index" ) || this.getAttribute("index") || this.getAttribute("plano") || null ;
    this.circular = this.getAttribute( "circular" ) || this.getAttribute( "radial" ) ;
    this.lineal = this.getAttribute( "lineal" ) || this.getAttribute( "linear" ) ;
    this.color = this.getAttribute( "color" ) || "transparent" ;
    this.opacidad = this.getAttribute("opacidad") || this.getAttribute("opacity")||false;
    if( this.imagen ) this.imagen = `url( ${this.imagen} )` ;
    if( this.circular ) this.imagen = `radial-gradient( ${this.circular} )` ;
    if( this.lineal ) this.imagen = `linear-gradient( ${this.lineal} )`
    var $div = this.shadowRoot.querySelector("div") ;
    if( this.imagen ){
    $div.style.backgroundImage = this.imagen ;
    //console.log(this.imagen)
    }
    $div.style.backgroundColor = this.color || "purple" ;
    if(this.zIndex)$div.style.zIndex = this.zIndex ;
    if(this.opacidad)$div.style.opacity = this.opacidad ;
}
    };window.customElements.define( "fondo-pantalla", FondoPantalla );

;class EsLista extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div mv-app >
    <div>
        Buscar: <input id="idBuscador" type="search" placeholder="busco..." /><button>Proceder</button>
    </div>
    <ul id="lista" >
        <slot />
    </ul>
</div>            `;
            if( this.render ) this.render() ; 
        }
render(){
    var $ = this ;
    $.qid("idBuscador").onkeyup = function() {
        $.mostrar() ;
        $.ocultar($.qid("idBuscador").value)
    }
}

mostrar() {var $=this;
    console.log("Mostrando")
    Array.from($.children).forEach(x=>{
        x.style.display="list-item";
    })
}

ocultar($clave){var $=this;
    Array.from($.children).forEach(x=>{
        if(!x.innerHTML.toLowerCase().includes($clave.toLowerCase()) )x.style.display="none";
    })
    console.log($c)
}
    };window.customElements.define( "es-lista", EsLista );

;class OtraVentana extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Otra ventana/pestaña <span id="idURL"></span> - <span id="idEstado">Cerrada</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Abrir</button>
            <button id="idBotonDesconectar">Cerrar</button>
            <span>
                Decile: <input decile><button decile>Proceder</button>
            </span>
        </fieldset>
        <fieldset id="idFieldsetEventos">
            <legend>Eventos</legend>
            <ul id="idEventos">
                
            </ul>
        </fieldset>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.estado = null ;
    this.conexion = null ;
    this.variable = this.getAttribute( "eventos" ) ;
    var $s = this.shadowRoot ;
    this.auto = this.hasAttribute( "auto" ) || this.hasAttribute( "automatico" ) || this.hasAttribute( "autoconectar" ) ;
    var $this = this ;
    $s.querySelector("#idBotonConectar").onclick = function() {
        $this.abrir() ;
    };
    $s.querySelector("#idBotonDesconectar").onclick = function() {
        $this.cerrar() ;
    };
    if( this.auto ) $this.abrir() ;
    $s.querySelector("button[decile]").onclick = function() {
        if(!$this.conexion) return ;
        $this.enviar( $s.querySelector("input[decile]").value, "*" )
    };
    window.addEventListener("unload", function($){
        if($this.conexion) $this.conexion.close();
    });
}

abrir( $url ) {
    if( !$url ) $url = this.getAttribute( "conectar" ) ;
    this.shadowRoot.querySelector("#idEstado").innerHTML = "Conectando..." ;
    var $this = this ;
    if( !this.conexion )
    this.conexion = window.open( 
        $url
        , this.getAttribute("title") || "Aplicación"
        , "toolbar=no,scrollbars=no,locationbar=no,statusbar=no,resizable=0" 
    ) ;
    if( this.conexion ) {
        $this.estado = "Conectado" ;
        $this.__agregarEvento( "Conectado" ) ;
        $this.shadowRoot.querySelector("#idEstado").innerHTML = "Conectado" ;
    }
    this.conexion.onmessage =( function( listaMensajes ) {
        console.log( arguments ) ;
        var $origen = listaMensajes.origin ;
        var $mensaje = listaMensajes.data ;
        try {
            $this.__agregarEvento( "Mensaje recibido" ) ;
            //console.log( $this.getAttribute("eventos") ) ;
            window[ $this.getAttribute("eventos") ].data ( $mensaje )
        }
        catch($e){ }
    }
    )
}

enviar( $mensaje, $origen ) {
    if( !this.conexion ) return ;
    this.conexion.postMessage( $mensaje, $origen ) ;
    this.__agregarEvento( "Enviado mensaje "+$mensaje );
}

cerrar() {
    if( !this.conexion ) return ;
    this.conexion.close() ;
    delete this.conexion ;
    if( this.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    this.shadowRoot.querySelector("#idEstado").innerHTML = "Cerrado" ;
    this.estado = "Cerrado" ;
    this.__agregarEvento( "Cerrado" ) ;
}

__agregarEvento( $texto ) {
    
    var $ahora = new Date() ;
    
    var $hora = $ahora.getHours() ;
    if( $hora < 10 ) $hora = "0" + $hora ;
    var $minutos = $ahora.getMinutes() ;
    if( $minutos < 10 ) $minutos = "0" + $minutos ;
    var $segundos = $ahora.getSeconds() ;
    if( $segundos < 10 ) $segundos = "0"+$segundos ;
    
    this.shadowRoot.querySelector("#idEventos").innerHTML
        += "<li>"+$hora+":"+$minutos+":"+$segundos+" > " + $texto +"</li>"
    ;
}
    };window.customElements.define( "otra-ventana", OtraVentana );

;class VentanaMadre extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    padding: 5px ;
    background: black ;
    color: white ;
    cursor: pointer ;
}

summary+div {
    padding: 10px ;
    border: 1px solid grey ;
}</style>
<details>
    <summary>
        Ventana madre
    </summary>
    <div>
        <div>
            La ventana nos dice: <input type="text" id="madrenosdice" disabled />
        </div>
        <div>
            Le decimos <input type="text" id="ledecimos" value="Hola" /><button>Enviar</button>
        </div>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render ()  {
    var $=this;
    window.opener.addEventListener("message", function(event){
        var $datos = event.data ;
        if($.hasAttribute("eventos"))eval( "("+$.getAttribute("eventos")+")" );
        $.shadowRoot.querySelector("#madrenosdice").value = $datos ;
    });
    $.shadowRoot.querySelector("button").onclick = function() {
        window.opener.postMessage( $.shadowRoot.querySelector("#ledecimos").value, "*" )
    };
}
    };window.customElements.define( "ventana-madre", VentanaMadre );

;class ServerEvents extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Conexión ServerSide <span id="idURL"></span> - <span id="idEstado">Desconectado</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Conectar</button>
            <button id="idBotonDesconectar">Desconectar</button>
        </fieldset>
        <fieldset id="idFieldsetEventos">
            <legend>Eventos</legend>
            <ul id="idEventos">
                
            </ul>
        </fieldset>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.estado = null ;
    this.conexion = null ;
    this.variable = this.getAttribute( "evento" ) ;
    this.auto = this.hasAttribute( "auto" ) || this.hasAttribute( "automatico" ) || this.hasAttribute( "autoconectar" ) ;
    var $this = this ;
    this.shadowRoot.querySelector("#idBotonConectar").onclick = function() {
        $this.conectar() ;
    };
    this.shadowRoot.querySelector("#idBotonDesconectar").onclick = function() {
        $this.desconectar() ;
    };
    if( this.auto ) $this.conectar() ;
    
}

conectar( $url ) {
    if( !$url ) $url = this.getAttribute( "conectar" ) ;
    this.shadowRoot.querySelector("#idEstado").innerHTML = "Conectando..." ;
    var $this = this ;
    this.conexion = new EventSource( $url, { withCredentials: true } ) ;
    this.conexion.onopen = function( situacion ) {
        $this.estado = "Conectado" ;
        $this.__agregarEvento( "Conectado" ) ;
        $this.shadowRoot.querySelector("#idEstado").innerHTML = "Conectado" ;
    };
    this.conexion.onmessage = function( situacion ) {
        if(window[$this.variable])window[ $this.variable ]( situacion.data ) ;
    };
    this.conexion.onerror = function( situacion ) {
        console.error( situacion )
    };
}

desconectar() {
    if( !this.conexion ) return ;
    if( this.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    this.conexion.close() ;
    this.shadowRoot.querySelector("#idEstado").innerHTML = "Desconectado" ;
    this.estado = "Desconectado" ;
    this.__agregarEvento( "Desconectado" ) ;
}

__agregarEvento( $texto ) {
    
    var $ahora = new Date() ;
    
    var $hora = $ahora.getHours() ;
    if( $hora < 10 ) $hora = "0" + $hora ;
    var $minutos = $ahora.getMinutes() ;
    if( $minutos < 10 ) $minutos = "0" + $minutos ;
    var $segundos = $ahora.getSeconds() ;
    if( $segundos < 10 ) $segundos = "0"+$segundos ;
    
    this.shadowRoot.querySelector("#idEventos").innerHTML
        += "<li>"+$hora+":"+$minutos+":"+$segundos+" > " + $texto +"</li>"
    ;
}
    };window.customElements.define( "server-events", ServerEvents );

;class PresentarTv extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${ DETAILS }</style>
<details >
    <summary >Presentar en TV</summary>
    <div >
        Ruta: <input />
        <hr>
        <button >Presentarla</button>
        <button conectar>Conectar/Reconectar</button>
        <button desconectar>Desconectar</button>
        <button terminar>Finalizar</button>
        <hr>
        Enviar <input mensaje />
        <button enviar>Enviarlo</button>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    
    var $ = this ;
    
    $.urls = $[GATT]("url") ;
    $.qs("input").value = $.urls ;
    $.objeto = new PresentationRequest( $.qs("input").value ) ;
    navigator.presentation.defaultRequest = $.objeto ;
    $.objeto2 = null ;
    $.solicitar() ;
    $.qs("button").onclick = function() {
        $.activar();
    }
    $.objeto.addEventListener(
        'connectionavailable'
        , function($estado) {
            $.objeto2 = $estado.connection;
            $.objeto2
                .addEventListener(
                    'close'
                    , function() {
                        $.__agregarEvento( 
                            `Conexión cerrada; podés volver a conectarte`
                        ) ;
                    }
                )
            ;
            $.objeto2
                .addEventListener(
                    'terminate'
                    , function() {
                        $.__agregarEvento( 
                            `Conexión finalizada` 
                        ) ;
                    }
                )
            ;
            $.objeto2
                .addEventListener(
                    'message'
                    , function($estado) {
                        $.__agregarEvento('> ' + $estado.data);
                    }
                )
            ;
        }
    );
}

solicitar() {
    var $ = this ;
    $.objeto
        .getAvailability()
        .then( fnAvailable )
        .catch( fnNotAvailable )
    ;
    
    function fnAvailable( $estado ) {
        $.disponibilidad( $estado.value ) ;
        $estado.onchange = function() {
            $.disponibilidad( $estado.value ) ;
        }
    }
    
    function fnNotAvailable() {
        $.qs("button").style.background = "red" ;
    }
}

disponibilidad( $nuevoEstado ) {
    
}

activar() {
    var $ = this ;
    $.objeto
        .start()
        .then( fnActuar )
        .catch( fnError )
    ;
    
    function fnActuar( $estado ) {
        $.__agregarEvento( `Conectado a ${$estado.url} con id ${$estado.id}` ) ;
        $.pId = $estado.id ;
    }
    
    function fnError( $error ) {
        $.__agregarEvento( `Error ${$error.name} - ${$error.message}` ) ;
    }
}

emitir( $mensaje ) {
    this.objeto2 && this.objeto2.send( $mensaje ) ;
}

cerrar() {
    this.objeto2 && this.objeto2.close() ;
    this.__agregarEvento( "Cerrado" ) ;
}

terminar() {
    this.objeto2 && this.objeto2.terminate() ;
    this.__agregarEvento( "Terminado" ) ;
}

reconectar() {var $ = this; 
    $.objeto2 && $.objeto2.reconnect( $.pId )
        .then(
            function( $conectado ) {
                $.__agregarEvento( "Reconectado a " + $conectado.id )
            }
        )
    ;
    $.__agregarEvento( "Intentando reconectar" ) ;
}
    };window.customElements.define( "presentar-tv", PresentarTv );

;class EsClima extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
div {
    width: 100% ;
    min-height: 3em ;
}</style>
<div><slot /></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    setTimeout(fnSubRender,1000) ;
    console.log("Renderizando") ;
    var $this = this ;
    var $lugar = this[GATT]( "ciudad" ) || this[GATT]( "lugar" )  || this[GATT]( "destino" ) || "" ;
    
    function fnSubRender() {
        console.log("Buscando clicma") ;
        var $ciudad = $this[PRIMER]( ".ciudad" ) ;
        var $pais = $this[PRIMER]( ".pais" ) ;
        var $temp = $this[PRIMER]( ".temperatura" ) ;
        var $sens = $this[PRIMER]( ".sensacion.termica" ) ;
        var $min = $this[PRIMER]( ".temperatura-minima" ) ; 
        var $max = $this[PRIMER]( ".temperatura-maxima" ) ;
        var $hume = $this[PRIMER]( ".humedad" ) ;
        var $pres = $this[PRIMER]( ".presion" ) ;
        var $viento = $this[PRIMER]( ".viento" ) ;
        var $solsale = $this[PRIMER]( ".salida.del.sol" ) ;
        var $solentra = $this[PRIMER]( ".puesta.del.sol" ) ;
        var $lat = $this[PRIMER]( ".latitud" ) ;
        var $lathemi = $this[PRIMER]( ".latitud.lado" ) ;
        var $lon = $this[PRIMER]( ".longitud" ) ;
        var $lonhemi = $this[PRIMER]( ".longitud.lado" ) ;
        fetch( 
            "https://gorosito.red/clima/"
            +"?ciudad="
            +( $lugar )
        )
        .then(x=>x.json())
        .then(x=>{
            console.log(x);
            if( $ciudad )$ciudad.innerHTML = $lugar ;
            if( $pais ) $pais.innerHTML = x.sys.country ;
            if( $temp ) $temp.innerHTML = (x.main.temp - 273.15).toFixed(2) ;
            if( $sens ) $sens.innerHTML = (x.main.feels_like - 273.15).toFixed(2) ;
            if( $min ) $min.innerHTML = (x.main.temp_min - 273.15).toFixed(2) ;
            if( $max ) $max.innerHTML = (x.main.temp_max - 273.15).toFixed(2) ;
            if( $hume ) $hume.innerHTML = x.main.humidity ;
            if( $pres ) $pres.innerHTML = x.main.pressure ;
            if( $lat ) $lat.innerHTML = x.coord.lat ;
            if( $lon ) $lon.innerHTML = x.coord.lon ;
            if( $lathemi ) $lathemi.innerHTML = x.coord.lat > 0 ? "Norte" : "Sur" ;
            if( $lonhemi ) $lonhemi.innerHTML = x.coord.lon > 0 ? "Este" : "Oeste" ;
            if( $viento ) $viento.innerHTML = x.wind.speed + "&gt;" + x.wind.deg ; 
            if( $solsale ) $solsale.innerHTML = new Date(x.sys.sunrise*1000).toString() ;
            if( $solentra ) $solentra.innerHTML = new Date(x.sys.sunset*1000).toString() ;
        })
        .catch(function(e){
            console.error( e )
        })
    }
    console.log( "Clima esperando" ) ;
}


    };window.customElements.define( "es-clima", EsClima );

;class SocketIo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Conexión socket <span id="idURL"></span> - <span id="idEstado">Desconectado</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Conectar</button>
            <button id="idBotonDesconectar">Desconectar</button>
        </fieldset>
        <fieldset id="idFieldsetEventos">
            <legend>Eventos</legend>
            <ul id="idEventos">
                
            </ul>
        </fieldset>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this,$$=$.shadowRoot ;
    if(!window.io) {
        fnScript("https://gorosito.red/dame/socket.io.js",x=>{
            $.render()
        })
        $.qid("idEstado").innerHTML = "¡Socket.io.js no está instalado!" ;
        return;
    }
    $.qid("idEstado").innerHTML = "Instalado - Abrir para conectar" ;
    $.estado = null ;
    $.conexion = null ;
    $.variable = $[GATT]( "eventos" ) ;
    $.auto = $[HATT]( "auto" ) || $[HATT]( "automatico" ) || $[HATT]( "autoconectar" ) ;
    $.qid("idBotonConectar")[CLICK] = f=>$.conectar() ;
    $.qid("idBotonDesconectar")[CLICK] = f=>$.desconectar() ;
    //if( $.auto ) 
    $.conectar() ;
}

conectar( $url ) {
    if( !$url ) $url = this[GATT]( "url" ) || this[GATT]("conectar") ;
    var $=this,$$=$.shadowRoot;
    $.qid("idEstado")[CODIGO] = "Conectando..." ;
    $.conexion = io( $url ) ;
    $.conexion.on(
        "connect"
        , function( situacion ) {
            $.estado = "Conectado" ;
            $.__agregarEvento( "Conectado" ) ;
            $.qid("idEstado")[CODIGO] = "Conectado" ;
            var $variable = window[ $.variable ] ;
            if( !$variable ) return ;
            for( var i in $variable ) {
                $.conexion.on( i, function(e) {
                    $.__agregarEvento( i ) ;
                    $variable[i]( e ) ;
                }) ;
            }
        }
    )
}

desconectar() {
    var $=this;
    if( !$.conexion ) return ;
    if( $.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    $.conexion.disconnect() ;
    $.qid("idEstado")[CODIGO] = "Desconectado" ;
    $.estado = "Desconectado" ;
    $.__agregarEvento( "Desconectado" ) ;
}

emitir($codigo,$mensaje){this.conexion.emit($codigo,$mensaje)}
    };window.customElements.define( "socket-io", SocketIo );

;class BetaniaIo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Conexión socket Betania <span id="idURL"></span> - <span id="idEstado">Desconectado</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Conectar</button>
            <button id="idBotonDesconectar">Desconectar</button>
        </fieldset>
        <details id="idFieldsetEventos">
            <summary>Eventos</summary>
            <ul id="idEventos">
                
            </ul>
        </details>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }

render() {var $=this;
    if( !window.io ) {
        $.qid("idEstado")[CODIGO] = "¡Socket.io.js no está instalado!" ;
        fnScript("https://gorosito.red/dame/socket.io.js",x=>$.render());return
    }
    $.qid("idEstado")[CODIGO] = "Instalado" ;
    $.estado = null ;
    $.conexion = null ;
    $.variable = $[GATT]( "eventos" ) ;
    $.variante = $[GATT]( "clave" ) ;
    $.auto = $[HATT]( "auto" ) || $[HATT]( "automatico" ) || $[HATT]( "autoconectar" ) ;
    $.qid("idBotonConectar").onclick = function() {
        $.conectar() ;
    };
    $.qid("idBotonDesconectar").onclick = function() {
        $.desconectar() ;
    };
    if( $.auto ) $.conectar() ;
}

conectar( $url ) {var $=this;
    if( !$url ) $url = $[GATT]( "conectar" ) ;
    $.qid("idEstado")[CODIGO] = "Conectando..." ;
    $.conexion = io( "https://servio.glitch.me" ) ;
    $.conexion.on(
        "connect"
        , function( $$ ) {
            $.estado = "Conectado" ;
            $.__agregarEvento( "Conectado" ) ;
            $.qid("idEstado")[CODIGO] = "Conectado" ;
            var $variable = window[ $this.variable ] ;
            if( !$variable ) return ;
            $.conexion.on( "betania", function(e){
                $.__agregarEvento( e ) ;
                var s = e.split("::") ;
                console.log( s[0], $[GATT]("clave") );
                if( s[0] !== $[GATT]("clave") );
                $variable( s[1]) ;
            } )
            window.sagrado = function( $mensaje ) {
                $.emitir( $mensaje ) ;
            }
        }
    )
}

desconectar() {var $=this;
    if( !$.conexion ) return ;
    if( $.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    $.conexion.disconnect() ;
    $.qid("idEstado").innerHTML = "Desconectado" ;
    $.estado = "Desconectado" ;
    $.__agregarEvento( "Desconectado" ) ;
}

emitir($codigo){
    this.conexion.emit("sagrado", $[GATT]("clave")+"::"+$codigo)
}
    };window.customElements.define( "betania-io", BetaniaIo );

;class SagradoIo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Conexión socket Sagrado <span id="idURL"></span> - <span id="idEstado">Desconectado</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Conectar</button>
            <button id="idBotonDesconectar">Desconectar</button>
        </fieldset>
        <details id="idFieldsetEventos">
            <summary>Eventos</summary>
            <ul id="idEventos">
                
            </ul>
        </details>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }

render() {var $=this;
    if( !window.io ) {
        $.qid("idEstado")[CODIGO] = "¡Socket.io.js no está instalado!" ;
        fnScript("https://gorosito.red/dame/socket.io.js",x=>$.render());return
    }
    $.qid("idEstado")[CODIGO] = "Instalado" ;
    $.estado = null ;
    $.conexion = null ;
    $.variable = $[GATT]( "eventos" ) ;
    $.variante = $[GATT]( "clave" ) ;
    $.auto = $[HATT]( "auto" ) || $[HATT]( "automatico" ) || $[HATT]( "autoconectar" ) ;
    $.qid("idBotonConectar").onclick = function() {
        $.conectar() ;
    };
    $.qid("idBotonDesconectar").onclick = function() {
        $.desconectar() ;
    };
    if( $.auto ) $.conectar() ;
}

conectar( $url ) {var $=this;
    if( !$url ) $url = $[GATT]( "conectar" ) ;
    $.qid("idEstado")[CODIGO] = "Conectando..." ;
    $.conexion = io( "https://servio.glitch.me" ) ;
    $.conexion.on(
        "connect"
        , function( $$ ) {
            $.estado = "Conectado" ;
            $.__agregarEvento( "Conectado" ) ;
            $.qid("idEstado")[CODIGO] = "Conectado" ;
            var $variable = window[ $this.variable ] ;
            if( !$variable ) return ;
            $.conexion.on( "sagrado", function(e){
                $.__agregarEvento( e ) ;
                var s = e.split("::") ;
                console.log( s[0], $[GATT]("clave") );
                if( s[0] !== $[GATT]("clave") );
                $variable( s[1]) ;
            } )
            window.sagrado = function( $mensaje ) {
                $.emitir( $mensaje ) ;
            }
        }
    )
}

desconectar() {var $=this;
    if( !$.conexion ) return ;
    if( $.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    $.conexion.disconnect() ;
    $.qid("idEstado").innerHTML = "Desconectado" ;
    $.estado = "Desconectado" ;
    $.__agregarEvento( "Desconectado" ) ;
}

emitir($codigo){
    this.conexion.emit("sagrado", $[GATT]("clave")+"::"+$codigo)
}
    };window.customElements.define( "sagrado-io", SagradoIo );

;class GeneralIo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
host {
}

details summary {
    background: black ;
    color: white ;
    padding: 10px ;
    cursor: pointer ;
}
details>div {
    padding: 10px ;
    background: white ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    text-shadow: 2px 2px 2px grey ;
}
fieldset {
    border-radius: 10px ;
}
fieldset button {
    padding: 10px ;
    background: black ;
    color: white ;
    border-radius: 10px ;
    border: none ;
    
}
fieldset#idFieldsetEventos {
    max-height: 60vh;
    overflow: auto ;
}</style>
<details >
    <summary>Conexión socket General <span id="idURL"></span> - <span id="idEstado">Desconectado</span></summary>
    <div>
        <fieldset>
            <legend>Conexión</legend>
            <button id="idBotonConectar">Conectar</button>
            <button id="idBotonDesconectar">Desconectar</button>
        </fieldset>
        <details id="idFieldsetEventos">
            <summary>Eventos</summary>
            <ul id="idEventos">
                
            </ul>
        </details>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {var $=this;
    $.qid("idEstado").innerHTML = "¡Socket.io.js no está instalado!" ;  
    if( !window.io ) {
        fnScript("https://gorosito.red/dame/socket.io.js",x=>$.render())
        ;return
    }
    $.qid("idEstado").innerHTML = "Instalado";
    $.estado = $.conexion = null ;
    $.variable = $[GATT]( "eventos" ) ;
    $.variante = $[GATT]( "clave" ) ;
    $.funciones = [];
    $.auto = this[HATT]( "auto" ) || this[HATT]( "automatico" ) || this[HATT]( "autoconectar" ) ;
    var $ = this ;
    $.qid("idBotonConectar").onclick = function() {$.conectar() ;};
    $.qid("idBotonDesconectar").onclick = function() {$.desconectar();};
    //if( $.auto ) 
    $.conectar() ;
}

conectar() {var $ = this ;
    $.qid("idEstado").innerHTML = "Conectando..." ;
    $.conexion = io( "https://servio.glitch.me" ) ;
    $.conexion.on(
        "connect"
        , function( situacion ) {
            $.estado = "Conectado" ;
            $.__agregarEvento( "Conectado" ) ;
            $.qid("idEstado")[CODIGO] = "Conectado" ;
            var $variable = window[ $.variable ] ;
            try {
                $.conexion.on( "general", function(e){
                    $.__agregarEvento( e ) ;
                    var s = e.split("::") ; // abc::nombre:Carlos Fernando
                    if( s[0] != $[GATT]("clave") ) return ;//console.log("No hay clave definida; agregarla como atributo");
                    if( s[1].indexOf(">")>-1 ) { // nombre:Carlos Fernando
                        var d = s[1].split(">"); // ["nombre", "Carlos Fernando"]
                        $variable( d[0], d.slice(1).join(">") ) ; // fnAbc( "nombre", "Carlos Fernando")
                        console.log( d.slice(1).join(">") )
                    }else
                    try{$variable( s[1] ) ;}catch(e){} // fnAbc( "nombre:Carlos Fernando"[0] )
                    $.funciones.forEach(function(fn){
                        var x = s[1].split(">");
                        fn( x[0], x.slice(1).join(">") )
                    })
                } )
            }
            catch(e){};
        }
    )
}

desconectar() {
    var $=this
    if( !$.conexion ) return ;
    if( $.estado == "Desconectado" ) {
        console.log( "Ya está desconectado" ) ;
        return ;
    }
    $.conexion.disconnect() ;
    $.qid("idEstado").innerHTML = "Desconectado" ;
    $.estado = "Desconectado" ;
    $.__agregarEvento( "Desconectado" ) ;
}

emitir($codigo){this.conexion.emit("general", this[GATT]("clave")+"::"+$codigo)}
enviar($codigo){this.conexion.emit("general", this[GATT]("clave")+"::"+$codigo)}
suscribir( $fn ) {this.funciones.push($fn)}
eliminar() {this.funciones = []}
nuevaclave($n) {this[SATT]("clave",$n)}
    };window.customElements.define( "general-io", GeneralIo );

;class FireBase extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<div>
    Conexión Firebase <conexion></conexion>
    <button conectar>Habilitar</button>
    <button ingresar>Habilitar primero</button>
</div>
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this;
    if( !window.firebase ) {
        fnScript("https://www.gstatic.com/firebasejs/8.0.1/firebase.js",x=>{
            $.render() ;
        }); return ;
    }
    if( !firebase.database ) {
        fnScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js",x=>{
            $.render();
        }); return ;
    }
    if( !firebase.auth ) {
        fnScript("https://www.gstatic.com/firebasejs/8.0.1/firebase-auth.js",x=>{
            $.render()
        });return ;
    }
    $.datos=$[GATT]("datos")||"{}";
    try{$.datos=JSON.parse($.datos)}catch($e){console.error($e)}
    if($[HATT]("auto"))$.conectar();
    $$[PRIMER]("[conectar]").onclick=()=>{$.conectar()};
    $.verificado=false
}
conectar() {
    var $=this;
    if($.app)return;
    if( !window.firebase ) {
        setTimeout(x=>{$.conectar()},100);
        return ;
    }
    $.app=firebase.initializeApp($.datos);
    $.db=firebase.database();$.auth=firebase.auth();
    $.atender=$[GATT]("suscribir"),$.globales=$[GATT]("eventos"),$.atenderUnaVez=$[GATT]("suscribir-una-vez");
    setTimeout(function() {
        if($.atender) {
            $.atender=window[$.atender];
            for(var i in $.atender){
                $.db.ref(i).on("value",$.atender[i]);
            }
        }
        if($.atenderUnaVez){
            $.atenderUnaVez=window[$.atenderUnaVez];
            for(var i in $.atenderUnaVez){
                $.db.ref(i).once("value",$atenderUnaVez[i]);
            }
        }
        if($.globales){
            $.globales=window[$.globales];
        }
        $.qs("[ingresar]")[CODIGO] = "Iniciar sesión" ;
        $.qs("[ingresar]").onclick = function() {
            if(!$.auth)return console.error("Módulo de autenticación no ha sido cargado");
            $.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) ;
            $.qs("[ingresar]")[CODIGO] = "Verificando" ;
        }
    
    }, 100);
    $.auth.onAuthStateChanged(function($usuario){
        if( $.suscribir && $.suscribir.usuario ) $.suscribir.usuario( $usuario ) ;
        $.verificado = !!$usuario ;
        if($.verificado){
            $.usuario__ = $usuario ;
//            if(!$.globales)return;
            //if(!$.globales.usuario)return;
            $.globales && $.globales.usuario && $.globales.usuario($usuario);
            $.qs("[ingresar]")[CODIGO] = "Cerrar sesión" ;
            $.qs("[ingresar]").onclick = function() {
                if($.verificado){
                    $.auth.signOut();
                    if($.atender&&$.atender.salir)$.atender.salir()
                }
            }         
        }
        else {
            $.qs("[ingresar]")[CODIGO] = "Iniciar sesión" ;
            $.qs("[ingresar]").onclick = function() {
                if(!$.auth)return console.error("Módulo de autenticación no ha sido cargado");
                $.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) ;
                $.qs("[ingresar]")[CODIGO] = "Verificando" ;
                
            }         
        }
    });
    return this
}
ayuda(){
    console.log( `<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-auth.js"></script>` ) ;
}
login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()) ;
}
logout($fn) {
    if( $fn ) {
        if( $fn() ) this.auth.signOut() ;
    }
    else
    this.auth.signOut() ;
}
grabar($que,$donde,$luegoQuePasa) {
    this.db.ref($donde).set($que,$luegoQuePasa);
}
nuevo($donde,$luegoQuePasa) {
    this.db.ref($donde).on("child_added",function(snapshot,prevChildKey){
        fn( snapshot.val(), snapshot.key, prevChildKey, snapshot.ref ) ;
    })
}
insertar($que,$donde,$luegoQuePasa) {
    var $clave=this.db.ref($donde).push().key;
    this.db.ref(`${$donde}/${$clave}`).set($que,$luegoQuePasa);
    return $clave;
}
suscribir( $caso, $fn ) {
    
}
    };window.customElements.define( "fire-base", FireBase );

;class WebSql extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}
main {
    padding: 10px ;
    border: 1px solid grey ;
}
button {
    width: 100% ;
}
[create],[select],[insert],[update] {
    width:20%;
}</style>
<details >
    <summary>SQL <span>Preparando...</span></summary>
    <main >
        <nav >
            Código SQL:<br>
            <details>
                <summary>Datos de conexión</summary>
                <div>
                    <article>
                        URL: <input id="idURL" type="url" >
                    </article>
                    <article>
                        <input id="idClaveQueryValidar" type="checkbox">
                        <label >Clave de consulta: <input id="idClaveQuery" value="q" disabled ></label>
                    </article>
                    <article>
                        <input id="idClaveBaseValidar" type="checkbox">
                        <label>Clave de Base de datos: <input id="idClaveBase" value="" disabled ></label>
                    </article>
                    <article>
                        <input id="idNombreBaseValidar" type="checkbox">
                        <label>Nombre de Base de datos: <input id="idNombreBase" value="base1.sqlite" disabled ></label>
                    </article>
                </div>
            </details>
            <fieldset>
                <legend>Ejecutar</legend>
                <div>
                    <button generador onclick="window.open('https://gorosito.red/bloques/web')">Generador de SQL</button>
                    <button create>Ej. CREATE</button>
                    <button select>Ej. SELECT</button>
                    <button insert>Ej. INSERT</button>
                    <button update>Ej. Update</button>
                    <textarea style="width:100%" generador>SELECT * FROM Nombres ;</textarea>
                    <button ejecutar >Ejecutar</button>
                </div>
            </fieldset>
            
        </nav>
        <details r>
            <summary>Resultados</summary>
            <div><textarea resultados style="width:100%" rows="8"></textarea></div>
        </details>
        
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;

    $$[PRIMER]("#idClaveQueryValidar").oninput = function() {
        $$[PRIMER]("#idClaveQuery")[this.checked?"removeAttribute":SATT]("disabled", 1);
    };
    $$[PRIMER]("#idClaveBaseValidar").oninput = function() {
        $$[PRIMER]("#idClaveBase")[this.checked?"removeAttribute":SATT]("disabled", 1);
    };
    $$[PRIMER]("#idNombreBaseValidar").oninput = function() {
        $$[PRIMER]("#idNombreBase")[this.checked?"removeAttribute":SATT]("disabled", 1);
    };
    
    $.ruta = $[GATT]("conectar") || $[GATT]("ruta") || $[GATT]("url") ;
    if( $.ruta ) $$[PRIMER]("#idURL").value = $.ruta ;
    
    $$[PRIMER]("button[ejecutar]").onclick = f=>$.consultar();
    if( $[HATT]("base") ) $$[PRIMER]("#idNombreBase").value = $[GATT]("base");
    $.span = $$[PRIMER]("span") ;
    $.span[CODIGO]="Activado" ;
    $$[PRIMER]("details")[SATT]("open",1);
    
    $.eventos = window[ $[GATT]("eventos") ] ;
    var ej ={
        "create":"CREATE TABLE IF NOT EXISTS Tab1 (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL ) ;"
        ,"insert":"INSERT INTO Tab1 (id, nombre) VALUES (null,'Roma'), (null,'Córdoba');"
        ,"select":"SELECT id,nombre FROM Tab1 WHERE nombre LIKE '%a%' ;"
        ,"update":"UPDATE Tab1 SET nombre='Montevideo' WHERE id=23 ;"
    }
    $.generador = $$[PRIMER]("textarea[generador]");
    var r ;
    $$[PRIMER]("button[create]").onclick=x=>{if((r=prompt("Ejemplo:",ej.create))!==null)$.generador.value=r;};
    $$[PRIMER]("button[select]").onclick=x=>{if((r=prompt("Ejemplo:",ej.select))!==null)$.generador.value=r;};
    $$[PRIMER]("button[insert]").onclick=x=>{if((r=prompt("Ejemplo:",ej.insert))!==null)$.generador.value=r;};
    $$[PRIMER]("button[update]").onclick=x=>{if((r=prompt("Ejemplo:",ej.update))!==null)$.generador.value=r;};
}

consultar( $consulta ) {
    var $ = this, $$ = $.shadowRoot;
    if( $consulta ) {
        $$[PRIMER]("textarea[generador]").value = $consulta ;
    }
    var $
    var fetching = $$[PRIMER]("#idURL").value + "?" ;
    fetching += $$[PRIMER]("#idClaveQuery").value + "=" + encodeURIComponent( $$[PRIMER]("textarea[generador]").value ) ;
    if( $$[PRIMER]("#idClaveBase").value ) fetching += "&" + $$[PRIMER]("#idClaveBase").value + "=" +  $$[PRIMER]("#idNombreBase").value ;
    $.span[CODIGO] = "Consultando..." ;
    fetch( fetching )
        .then( x=>x.text() )
        .then( x => {
            var $r;
            try {
                x = JSON.stringify(JSON.parse(x),null,4);
            }catch(e){}
            $$[PRIMER]("textarea[resultados]").value = x ;
            $$[PRIMER]("details[r]")[SATT]("open",1)
            $.span[CODIGO] = "Listo" ;
            if( $.eventos ) {
                var $tipo = typeof $.eventos ;
                if( $tipo=="function" ) $.eventos( x, "ok" ) ;
                else if( $.eventos.ok ) $.eventos.ok( x ) ;
            }
        })
        .catch( e => {
            console.error(e) ;
            $.span[CODIGO] = "Hubo un error" ;
            if( $.eventos ) {
                var $tipo = typeof $.eventos ;
                if( $tipo=="function" ) $.eventos( x, "error" ) ;
                else if( $.eventos.ok ) $.eventos.error( x ) ;
            }
        })
    ;
}
    };window.customElements.define( "web-sql", WebSql );

;class ConsultaAjax extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}
[invocar]{background:green}
fieldset {
border-radius:10px;
}</style>
<details>
    <summary>
        AJAX - <button invocar>Invocar</button> - <span>Cargando</span>
    </summary>
    <main>
        <div></div>
        <fieldset>
            <legend>Estado</legend>
            <div>
                Estado <span id="st">Invocar</span> (<span id="stt">Invocar</span>)
            </div>
        </fieldset>
        <details>
            <summary>Logs</summary>
            <section>
                
            </section>
        </details>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot, QS = "querySelector" ;
    $$[QS]("[invocar]").onclick = ()=> {
        $.invocar() ;
    };
    $.eventos = null ;
    $$[QS]("span").innerHTML = "Listo";
    if( !$.hasAttribute("conectar") ) {
        $$[QS]("div").innerHTML = '<input style="width=100%" value="https://" >';
    }
}

invocar($url,$this) {
    var $ = $this || this, $$ = $.shadowRoot, QS = "querySelector", $$$ = $$[QS]("span") ;
    if( $.hasAttribute("eventos") ) {
        $.eventos = window[ $.getAttribute("eventos") ] ;
        console.log($.eventos)
    }
    $$$.innerHTML = "Conectando" ;
    $.objeto = 
        fetch(
            $.getAttribute("conectar") 
                || $.getAttribute("url") 
                || $url
                || $$[QS]("input").value
            , {
                method: $.getAttribute("metodo") || "GET"
            }
        )
        .then(
            function($objetoFetching) {
                $$$.innerHTML = "Conseguido, procesando" ;
                $$[QS]("#st").innerHTML = $objetoFetching.status ;
                $$[QS]("#stt").innerHTML = $objetoFetching.statusText ;
                console.log( $objetoFetching );
                if( $.hasAttribute("json") ) return $objetoFetching.json() ;
                if( $.hasAttribute("blob") ) return $objetoFetching.blob() ;
                return $objetoFetching.text() ;
            }
        )
        .then(
            function($resultado) {
                $$$.innerHTML = "Recibido" ;
                if( $.eventos ) {
                    try {
                        $.eventos.data( $resultado ) ;
                    } catch(e){console.error(e)}
                }
                else console.log($resultado) ;
            }
        )
        .catch(
            function($error) {
                $$$.innerHTML = "Hubo un error" ;
                if( $.eventos ) {
                    try {
                        $.eventos.data( $error ) ;
                    } catch(e){}
                } else console.log($error) ;
            }
        )
    ;
}
    };window.customElements.define( "consulta-ajax", ConsultaAjax );

;class WebCam extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ;
    color: white ;
    padding: 5px ;
    cursor: pointer ;
}

summary+main {
    padding: 20px ;
    background: white ;
    text-align: center ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
}

button {
    padding: 10px ;
    color: white ;
    border:none;
    border-radius: 10px ;
}
[comenzar] {
    background: green ;
}
[detener] {
    background: red ;
}
[actualizar] {
    background: darkgrey;
}</style>
<details open>
    <summary>Cámara web</summary>
    <main>
        <div botonera>
            <button comenzar>Comenzar</button>
            <button detener>Detener</button>
            <button actualizar>Actualizar lista</button>
        </div>
        <section>
            <select  >
                <option value="">Obteniendo lista de cámaras</option>
            </select>
        </section>
        <section>
            <video ></video>
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot
        , comenzar = $$.querySelector("[comenzar]")
        , detener = $$.querySelector( "[detener]" )
        , video = $$.querySelector( "video" ) 
        , select = $$.querySelector("select") 
    ;
    comenzar.onclick = function() {$.comenzar() ;};
    detener.onclick = function() {$.detener() ;};
    $.detectar() ;
}

detectar() {
    var $select = this.shadowRoot.querySelector("select") ;
    $select.innerHTML = "" ;
    navigator
        .mediaDevices
        .enumerateDevices()
        .then(
            function( $listaDevices ) {
                console.log( $listaDevices );
                $select.innerHTML =
                  $listaDevices
                    .filter(
                        function( $cadaDisp ) {
                            return /video/i.test($cadaDisp.kind)
                        }
                    )
                    .map(
                        function( $cadaWebCam ) {
                            return `<option value="${$cadaWebCam.deviceId}">${$cadaWebCam.label} </option>`
                        }
                    )
                    .join("")
                ;
            }
        )
}

comenzar() {
    var $ = this, $$ = $.shadowRoot
        , comenzar = $$.querySelector("[comenzar]")
        , detener = $$.querySelector( "[detener]" )
        , video = $$.querySelector( "video" ) 
        , select = $$.querySelector("select") 
    ;
    navigator
        .mediaDevices
        .getUserMedia(
            {
                video: {
                    width: $[HATT]("chica") ? 320 : 640 
                    , height: $[HATT]("chica") ? 200 : 400
                }
                , audio: false
                , deviceId: {
                    exact: select.value
                }
            }
        )
        .then(
            function( $flujo ) {
                video.srcObject = $flujo ;
                video.play() ;
            }
        )
    ;
}

detener() {
    var $video = this.shadowRoot.querySelector("video") ;
    $video.pause() ;
    var $flujo = $video.srcObject.getTracks() ;
    $flujo.forEach( function($cadaTrack) { $cadaTrack.stop() } ) ;
    $video.srcObject = null ;
}


    };window.customElements.define( "web-cam", WebCam );

;class PatronDesbloqueo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<slot />
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    if(!window.jQuery){
        fnScript("https://code.jquery.com/jquery-2.2.4.min.js",x=>{
            $.render()
        });return
    }
    this.innerHTML = "<svg style='background:black'></svg>";
    $.ref = jQuery(this.children[0]);
    try {
        $.ref.html(`<g class="lock-active"></g>
    <g class="lock-lines"></g>
    <g class="lock-dots">
        <circle cx="100" cy="100" r="20" fill="green"></circle>
        <circle cx="200" cy="100" r="20" fill="green"></circle>
        <circle cx="300" cy="100" r="20" fill="green"></circle>
        <circle cx="100" cy="200" r="20" fill="green"></circle>
        <circle cx="200" cy="200" r="20" fill="green"></circle>
        <circle cx="300" cy="200" r="20" fill="green"></circle>
        <circle cx="100" cy="300" r="20" fill="green"></circle>
        <circle cx="200" cy="300" r="20" fill="green"></circle>
        <circle cx="300" cy="300" r="20" fill="green"></circle>
    </g>`);
        $.ref.attr("class","patternlock");
        $.ref.attr("viewbox","0 0 400 400");
        $.ref.attr("width",$[GATT]("ancho")||$[GATT]("lado")||$[GATT]("medida")||400);
        $.ref.attr("height",$[GATT]("ancho")||$[GATT]("lado")||$[GATT]("medida")||400);
    }catch(e){}
    if( !window.PatternLock ) {
        fnScript("https://gorosito.red/dame/patron.js",k=>$.render());
        fnLink("https://gorosito.red/dame/patron.css");
        return
    }
    $.objeto = new PatternLock(
        $.ref
        , {
            onPattern: function($r) {
                if( $[HATT]("eventos") ) {
                    var $ev = window[ $[GATT]("eventos") ];
                    if( $ev && typeof $ev == "function" ) {
                        $ev($r)
                    }
                }else console.log("Patrón", $r)
            }
        }
    );
}


activar() {
    var $ = this, $$ = $.shadowRoot ;
    $.objeto = new PatternLock(
        $.qs("svg")
    );/*
        , {
            onPattern: function($r) {
                if( $.hasAttribute("eventos") ) {
                    var $ev = window[ $.getAttribute("eventos") ];
                    if( $ev && typeof $ev == "function" ) {
                        $ev($r)
                    }
                    else if( $ev && $ev.data && typeof $ev.data == "function" ) {
                        $ev.data( $r )
                    }
                }else console.log("Patrón", $r)
            }
        }
    );*/
}
    };window.customElements.define( "patron-desbloqueo", PatronDesbloqueo );

;class MideBateria extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div>
    Batería <meter min="0" max="100" value="0" ></meter>
    (<span></span>%) - Cargando: <input type="checkbox" disabled >
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $this = this ;
    var $medidor = this.shadowRoot.querySelector( "meter" ) ;
    var $valor = this.shadowRoot.querySelector( "span" ) ;
    var $cargando = this.shadowRoot.querySelector( "input[type=checkbox]" ) ;
    $this.nivel = null ;
    $this.cargando = null ;

    navigator
        .getBattery()
        .then(function($laBateria){
            function actualizar( $nivelBateria ) {
                $medidor.value = $nivelBateria*100 ;
                if( $laBateria.charging ) $cargando.checked = "checked" ;
                else $cargando.checked = null ;
                $valor.innerHTML = Math.round($nivelBateria*100,2) ;
                $this.nivel = $nivelBateria*100 ;
                $this.cargando = $laBateria.value ;
            }
            
            $laBateria.onlevelchange = function() {
                actualizar( $laBateria.level );
            };
            $laBateria.onchargingchange = function() {
                actualizar( $laBateria.level );
            };
            actualizar( $laBateria.level );
        })
    ;
}
    };window.customElements.define( "mide-bateria", MideBateria );

;class JoystickVirtual extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
div {
box-shadow: 2px 2px 2px black ; position: relative ;
}</style>
<div ></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this;
    if(!window.jQuery){fnScript("https://code.jquery.com/jquery-3.6.1.min.js",x=>$.render());return}
    if(!window.nipplejs){fnScript("https://gorosito.red/dame/nipple.js",x=>$.render());return}
    var $$$=$.qs("div");
    $$$.style.width=$[GATT]("ancho")||$[GATT]("lado")||$[GATT]("medida")||"100px";
    $$$.style.height = $$$.style.width ;
    $.objeto = nipplejs.create({mode:"dynamics",zone:$$$,color:$[GATT]("color")||"teal",fadeTime:10});
    $.datos = null ;
    $.objeto.on("move", function(evento, data) {
        if($.eventos && $.eventos.data)$.eventos.data(data, evento);
        if(typeof $.eventos == "function" ) $.eventos(data,evento);
        $.datos = $.data ;
    });
    $.objeto.on("end", function(evento,data){if($.eventos && $.eventos.fin)$eventos.fin($.data);$.datos=null; });
    if( $[HATT]("auto") ) $.iniciar() ;
    if( $[HATT]("eventos") ) $.eventos = window[ $[GATT]("eventos") ];
}

iniciar() {
    var $ = this ;
    $.timer = setInterval(function(){
        if( $.datos && $.eventos && $.eventos.data ) {
            $.eventos.data($.datos.angle.degree, $.datos.force)
        }
        else if( $.datos && $.eventos  ) {
            try{$.eventos($.datos.angle.degree, $.datos.force)}catch(e){}
        }
        if( $.datos ) $.funciones.forEach(function(fn){
            fn($.datos.angle.degree,$.datos.force,$.datos)
        })
    },100);
}

detener() {if(this.timer) clearInterval(this.timer)}
suscribir(fn) {
    this.funciones.push(fn)
}
eliminar() {
    this.funciones = [] ;
}
    };window.customElements.define( "joystick-virtual", JoystickVirtual );

;class JoystickFisico extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${cssDetails}
</style>
<details >
    <summary >Joystick - <span>Esperando que conectes uno</span></summary>
    <div>
        <article id="joystick1">
            <span id="idb11"></span>
            <span id="idb12"></span>
            <span id="idb13"></span>
            <span id="idb14"></span>
            <span id="idb15"></span>
            <span id="idb16"></span>
            <span id="idb17"></span>
            <span id="idb18"></span>
            <span id="idb19"></span>
            <span id="idb110"></span>
            <span id="idb111"></span>
            <span id="idb112"></span>
            <span id="idb113"></span>
            <span id="idb114"></span>
            <span id="idb115"></span>
            <span id="idb116"></span>
            <span id="idb117"></span>
            <span id="idb118"></span>
            <span id="idb119"></span>
            <span id="idb120"></span>
        </article>
        <article id="joystick2">
            <span id="idb21"></span>
            <span id="idb22"></span>
            <span id="idb23"></span>
            <span id="idb24"></span>
            <span id="idb25"></span>
            <span id="idb26"></span>
            <span id="idb27"></span>
            <span id="idb28"></span>
            <span id="idb29"></span>
            <span id="idb210"></span>
            <span id="idb211"></span>
            <span id="idb212"></span>
            <span id="idb213"></span>
            <span id="idb214"></span>
            <span id="idb215"></span>
            <span id="idb216"></span>
            <span id="idb217"></span>
            <span id="idb218"></span>
            <span id="idb219"></span>
            <span id="idb220"></span>
        </article>
        <button det>Detener</button>
        <button ini>Iniciar</button>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    var $evs=$["getAttribute"]("eventos");
    var $ev=window[$evs];
    var span=$$.querySelector("span"),$evf=typeof $ev=="function"
    ,$evu=typeof $ev=="undefined";
    $.objeto = null ;
    $.timer=null;
    
    $$.querySelector("[det]").onclick = function() {
        $.detener()
    }
    $$.querySelector("[ini]").onclick = function() {
        $.iniciar()
    }
    $.funciones = [] ;
    window.addEventListener("gamepadconnected",x=>{
        $.objeto = x.gamepad;
        console.log($.objeto, $ev + "yu", typeof $ev);
        $evf?$evf("conectado",$.objeto.id,$.objeto):$evu?"":$ev.conectado($.objeto,$.objeto.id); span[CODIGO]="Joystick "+$.objeto.id+" conectado";
       // $.botones = Array.fill($.objeto.buttons.length);
       $.iniciar() ;
    });
    window.addEventListener("gamepaddisconnected",x=>{
        $.objeto = null ;
        $evf?$evf("desconectado",x.gamepad.id):$evu?"":$ev.desconectado(x.gamepad.id);
        span[CODIGO]="Joystick "+x.gamepad.id+" desconectado";
    });
}

controlar() {
    if( $.objeto ) return $.objeto ;
}

detener() {
    clearInterval( this.timer )
    this.timer = null ;
}

suscribir( fn ) {
    this.funciones.push(fn)
}

eliminar() {
    this.funciones = [] ;
}

iniciar() {
    var $ = this, $$ = $.shadowRoot ;
    if( !$.timer )
    $.timer=setInterval(function(x){
        $.objeto = navigator.getGamepads()[0];
        $.status = { 
            b: $.objeto.buttons.map(x=>x.pressed)
            , c:$.objeto.buttons.map(x=>x.value).join("") 
            , a: $.objeto.axes 
        };
        $.funciones.forEach(function(fn, orden){
            fn( "paso", $.status )
        })
        
    },100)

}
    };window.customElements.define( "joystick-fisico", JoystickFisico );

;class LuzAmbiente extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ; color: white ;
    padding: 5px ; cursor: pointer ;
}
summary+div {
    padding: 10px ;
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
}
</style>
<details>
    <summary>Luz ambiente <span></span></summary>
    <div>
        Valor: <input type="number">
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $ = this ;
    $.objeto = new AmbientLightSensor() ;
    $.objeto.addEventListener("reading", function($$){
        $.shadowRoot.querySelector("input").value = $.objeto.illuminance ;
        console.log( $$, $.objeto )
    })
}
    };window.customElements.define( "luz-ambiente", LuzAmbiente );

;class SensorGravedad extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Aceleraciones</summary>
    <div>
        Sensando 
        <input type="number" sx>
        <input type="number" sy>
        <input type="number" sz>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    $.sx = $$.querySelector("[sx]");
    $.sy = $$.querySelector("[sy]");
    $.sz = $$.querySelector("[sz]");
    this.objeto = new Accelerometer({ frequency: 60 });
    this.objeto.addEventListener(
        "reading"
        , function() {
            $.sx.value = $.objeto.x ;
            $.sy.value = $.objeto.y ;
            $.sz.value = $.objeto.z ;
        }
    );
    this.objeto.start() ;
}


    };window.customElements.define( "sensor-gravedad", SensorGravedad );

;class ControlRemotoAudio extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${ DETAILS } </style>
<details >
    <summary>Control Remoto</summary>
    <div>
        Hola!
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    
    var $ = this ;
    
    $.claves = this[GATT]("palabras") || this[GATT]("claves") ;
    $.claves = $.claves.split( "," ).map( x => x.trim() ) ;
    $.eventos = this[GATT]("eventos") ;
    
    $.transmisor = this[HATT]("transmisor") || this[HATT]("transmitir") || this[HATT]("emisor") ;
    $.receptor = !$.transmisor ;

    if( $.transmisor ) {
        if( !window.Remote ) {
            return fnScript( "https://gorosito.red/dame/remote.transmitter.js", x => $.render() ) ;
        }
        $.metodo = "transmitter" ;
    }
    else {
        if( !window.Remote ) {
            return fnScript( "https://gorosito.red/dame/remote.receiver.js", x => $.render() ) ;
        }
        $.metodo = "receiver" ;
    }
    console.log( $.metodo ) ; 
    $.objeto = new Remote[$.metodo]( $.claves ) ;
    console.log( $.objeto ) ; 
    if( $.transmisor ) {
        $.claves.forEach(
            function( $cadaClave ) {
                var $fn ;
                if( window[ $.eventos ] ) $fn = window[ $.eventos ] ;
                else $fn = function($n) { console.log( "Recibido " + $n ) ; }
                $.objeto.on( $cadaClave, $fn($cadaClave) );
            }
        )
    }
    
}

emitir( $n ) { var $ = this ;
    if( !$n ) return console.log( "Emitir vacío" );
    if( typeof $n == "number" ) $.objeto.emit( $.claves[$n] ) ;
    $.objeto.emit( $n ) ;
    console.log( "Emitiendo " + $n )
}
    };window.customElements.define( "control-remoto-audio", ControlRemotoAudio );

;class ArduinoBt extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}
nav {
    text-align: center ;
}
select {
    width: 100% ;
}
button {
    padding: 5px ;
    color: white ;
    border: none ;
}
button[conectar] {
    background: green ;
    border-top-left-radius: 10px ;
    border-bottom-left-radius: 10px ;
}
button[desconectar]{
    background: red ;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
}
button[buscar]{
    background: blue ;
    border-radius: 10px ;
}
[hablarle]+button {
    background: black;
}</style>
<details >
    <summary>Bluetooth - <span>No iniciado</span></summary>
    <div>
        <select >
            <option value="">Activá el Bluetooth</option>
        </select>
        <center>
            <button buscar>Buscar</button>
        </center>
        <hr />
        <nav>
            <button conectar>Conectar</button>
            <button desconectar>Desconectar</button>
        </nav>
        <hr>
        <section >
            <div>Leído <input leido></div>
            <div>Hablarle <input hablarle><button>&gt;</button></div>
        </section>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot, buscar = "querySelector" ;
    if( !window.AppInventor ) {
        $$[buscar]("summary>span").innerHTML = "No funciona fuera de App modelo" ;
        if( this.hasAttribute("solo-app") ) this.setAttribute( "hidden", 1 ) ;
    }
    $$[buscar]("button[buscar]").onclick = function() {
        $.buscar() ;
    };
    $$[buscar]("button[conectar]").onclick = function() {
        $.conectar() ;
    };
    $$[buscar]("button[desconectar]").onclick = function() {
        $.desconectar() ;
    };
    if( $.hasAttribute("auto") ) $.buscar() ;
}

buscar() {
    var $ = this, $$ = $.shadowRoot, buscar = "querySelector" ;
    AppInventor.setWebViewString( "conseguirlistabt" ) ;
    window.fnListaBT = function( $dadaLista_str ) {
        var opciones = $dadaLista_str.split( "|" ) ;
        var opciones_correctas = opciones.map(function( $cadaOpcion ){
            var split = $cadaOpcion.split(" ");
            return {
                direccion: split[0]
                , nombre: split[1]
            }
        });
        if( opciones.length == 0 ) {
            $$[buscar]("summary>span").innerHTML = "Activar BT o Conectar a uno antes" ;
        } else {
            $$[buscar]("select").innerHTML =
                `<option value="">Seleccioná uno</option>`
                + opciones_correctas.map(function({direccion,nombre}){
                    return `<option value="${direccion}">${nombre} (${direccion})</option>`
                })
            ;
            $$[buscar]("summary>span").innerHTML = "Seleccionar un dispositivo" ;
        }
        if( document.cookie.includes("ultimobt=") ) {
            $$[buscar]("select").value = 
                document.cookie
                .split(";")
                .map(x=>x.trim())
                .map(x=>x.split("="))
                .map(x=>({"clave":x[0],"valor":x[1]}))
                .filter(x=>x.clave=="ultimobt")
                [0].value ;
        }
        
    };
}

conectar() {
    var $ = this, $$ = $.shadowRoot ;
    var $valor = $$.querySelector("select").value ;
    var $$$ = document.querySelector("pantalla-splash") ;
    if( $$$ ) {
        $$$.innerHTML = "<center>Conectando a Bluetooth</center>" ;
        $$$.style.display = "block" ;
    }
    $$.querySelector("summary>span").innerHTML = "Conectando";
    setTimeout( ()=>AppInventor.setWebViewString( "conectarbt:"+ $valor ), 200 ) ;
    console.log( "Conectando a ", $valor ) ;
    window.fnClienteBTOn = function( $codigo ) {
        if( $$$ ) $$$.style.display = "none" ;
        $$.querySelector("summary>span").innerHTML = "Conectado" ;
        document.cookie = "ultimobt="+$valor;
        if( $codigo == 0 ) {
            if( $.hasAttribute("eventos") ) {
                try {
                    window[ $.getAttribute("eventos") ].conectado( $valor ) ;
                }catch($e){
                    console.log( "Conectado: ", $codigo, $valor ) ;
                }
            }
        }
        else {
            console.log( "Reconectado ", $codigo, $valor ) ;
        }
        $.conectado = true ;
        $$.querySelector("[hablarle]+button").onclick = (function(){
            $.enviar($$.querySelector("[hablarle]").value) ;
        });
    };
    window.fnClienteBTOff = function( $codigo ) {
        if( $.hasAttribute("eventos") ) {
            try {
                window[ $.getAttribute("eventos") ].conectado( $valor ) ;
            }catch($e){
                console.log( "Desconectado: ", $codigo, $valor ) ;
            }
        }
        console.log( "Desconectado código:", $codigo, $valor ) ;
        $$.querySelector("summary>span").innerHTML = "Desconectado";
        $.conectado = false ;
    };
    window.fnRecibirBT = function( $mensaje ) {
        if( $.hasAttribute("eventos") ) {
            try {
                window[ $.getAttribute("eventos") ].data( $mensaje ) ;
            }catch($e){
                console.log( "Recibido: ", $mensaje ) ;
            }
        }
        $$.querySelector("input[leido]").value = $mensaje ;
        console.log( "Recibido: ", $mensaje ) ;
    };
}

desconectar() {
    AppInventor.setWebViewString( "desconectarbt" ) ;
}

enviar($mensaje) {
    if( this.conectado )
    AppInventor.setWebViewString( "enviarbt:"+$mensaje ) ;
}


    };window.customElements.define( "arduino-bt", ArduinoBt );

;class ArduinoUsb extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Arduino</summary>
    <div>
        <div center >
            <button conectar >Conectar</button>
            <button desconectar>Desconectar</button>
            <span>Conectado <input type="checkbox" disabled/></span>
        </div>
        <hr>
        <div>
            <label >
                Enviar mensaje:
                <input enviar />
                con Enter <input type="checkbox" conEnter>
                <button enviar>Enviar</button>
            </label>
        </div>
        <hr>
        <div>
            <label >
                Mensaje recibido:
                <textarea resultado ></textarea>
            </label>
        </div>
        <details open >
            <summary>Logs</summary>
            <ul logs>
                
            </ul>
        </details>
    </div>
</details>
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this;
    $.funciones = []; $.funciones2 = [] ;
    $.qs("[conectar]").onclick = x=>{$.conectar($)};
    $.qs("[desconectar]").onclick=f=>{$.desconectar($)};
    $.qs("button[enviar]").onclick=f=>{$.grabar($)};
    $.qs("input[enviar]").onkeyup = function($tecla){
        if( /enter|return/i.test($tecla.code) ) {
            $.grabar($);  
            this.select() ;
        }
    };
    $.puerto = null ;
    $.deco = null ;
    $.lector = null ;
    $.grabador = null ;
    if( $[HATT]("auto") && 0 ) {
        navigator
            .serial
            .getPorts()
            .then(
                function( $lista ) {
                    if( !$lista ) return ;
                    $.puerto = $lista[0];
                    $.conectar();
                }
            )
    }
}

avisar($mensaje){
    var $ul = this.qs("[logs]") ;
    var $f = new Date() ;
    var h = $f.getHours();
    var m = $f.getMinutes() ;
    var s = $f.getSeconds() ;
    if( m < 10 ) m = "0"+m ;
    if( s < 10 ) s = "0"+s ;
    $ul[CODIGO] += `<li>${h}:${m}:${s} - ${$mensaje}</li>`;
}
async enviar($mensaje) {var $=this;
    if( typeof $mensaje == "string" ) {
        this.qs("input[enviar]").value = $mensaje ;
        this.grabar(this);
    } else {
        for( var $i in $mensaje ) {
            setTimeout(
                function() {
                    $.qs("input[enviar]").value = $mensaje;
                    $.grabar($)
                }
                , $i*70
            )
        }
    }
}
grabar($this) {
    $this = $this||this; //$this || this ;
    var $s = $this.shadowRoot, $=this;
    if( !$this.conectado ) return ;
    if( window.AppInventor ) {
        AppInventor.setWebViewString( 
            "enviararduino:"
            +$.qs("input[enviar]").value
            +($.qs("input[conEnter]").value=="on" ? "\n":"")
        );
        return ;
    }
    $this.grabador.write( 
        $.qs("input[enviar]").value.trim() 
        + ($.qs("input[conEnter]").value == "on" ? "\n" : "")
    ) ;
    $this.grabador.releaseLock() ;
    $this.grabador = $this.outputStream.getWriter();
}
async conectar($this) {
    $this = $this || this ;
    $this.avisar("Solicitando conexión al usuario") ;
    if( window.AppInventor ) {
        AppInventor.setWebViewString( "activararduino" ) ;
        $this.conectado = true ;
        $this.qs("input[type=checkbox]")[SATT]("checked","checked");
        $this.avisar("Leyendo");
        
        if( $this[HATT]("eventos") || $this[HATT]("onrenglon") ) {
            try{
                $this.eventos = window[$this[GATT]("eventos")] || function(n){console.log(n)};
                console.log( $this[GATT]("onrenglon") ) ;
                $this.onrenglon = window[$this[GATT]("onrenglon")] || function(n){console.log(n)};
                console.log($this.onrenglon)
            }
            catch(e){ console.log(56, e)} ;

            window.fnRecibirArduino = function( $mensaje ) {
                if( !$this.conectado ) return ;
                $this.eventos.data && typeof $this.eventos.data == "function" &&
                    $this.eventos.data( $mensaje ) ;
                $this.onrenglon && ( $mensaje ) ;
            }
        }
    }
    else
    try {
        //if( !$this[HATT]("auto") )
        $this.puerto = await navigator.serial.requestPort({
            filter: [
                  { usbVendorId: 0x2341, usbProductId: 0x0043 }
                , { usbVendorId: 0x2341, usbProductId: 0x0001 }
            ] 
        }) ;
        navigator.serial.addEventListener( "disconnect", function() {
            if( $this[HATT]("ondesconectado") ) 
                window[ $this[GATT]("ondesconectado") ]();
            if( $this.eventos && $this.eventos.desconectado && typeof $this.eventos.desconectado == "function" ) {
                $this.eventos.desconectado() ;
            }
            $this.desconectar($this) ;
        },false);
        await $this.puerto.open(
            {
                baudRate: $this[GATT]("baudios")||9600
            }
        );
        $this.deco = new TextDecoderStream();
        $this.inputDone = $this.puerto.readable.pipeTo( $this.deco.writable ) ;
        $this.inputStream = $this.deco.readable;
        $this.lector = $this.inputStream.getReader();
    
        $this.codi = new TextEncoderStream();
        $this.outputDone = $this.codi.readable.pipeTo( $this.puerto.writable ) ;
        $this.outputStream = $this.codi.writable;
    
        $this.qs("input[type=checkbox]")[SATT]("checked","checked");
        $this.avisar("Leyendo");
        $this.conectado=true ;
        if( $this[GATT]("eventos") ) {
            try{
                $this.eventos = window[$this[GATT]("eventos")] ;
                if( $this.eventos.conectado ) $this.eventos.conectado() ;
            }
            catch(e){} 
        }
        if( $this[HATT]("onconectado")) {
            try {
                window[$this[GATT]("onconectado")]() ;
            }catch(e){}
        }
        if( $this[HATT]("onrenglon") ) {
            try{
                $this.onrenglon = window[$this[GATT]("onrenglon")] ;
            }
            catch(e){} 
        }
        $this.grabador = $this.outputStream.getWriter();
        $this.readLoop();
    } catch($e){
        $this.avisar( "El usuario canceló" );
        $this.eventos = window[$this[GATT]("eventos")] ;
        if( $this.eventos.cancelado  )$this.eventos.cancelado( "Conexión cancelada" ) ;
        console.log( $e )
    }
}

async readLoop() {
    let $datos ;
    var $ = this;
    var $s = this.shadowRoot ;
    var $resul = $.qs("[resultado]");
    var renglon = "" ;
    this.habilitarProtocolo() ;
    while( true ) {
        $datos = await this.lector.read() ;
        if( $datos.value ) {
            renglon += $datos.value ;
            if( /\n/.test(renglon) ) {
                var rrenglon = renglon.split("\n") ;
                if( this.eventos && this.eventos.renglon ) this.eventos.renglon(rrenglon[0]) ;
                $resul.value = rrenglon[0] + "\n" + $resul.value ;
                this.funciones.forEach(function(fn){
                    fn( rrenglon[0] )
                });
                if( this.onrenglon ) this.onrenglon( rrenglon[0] );
                if( renglon.includes(":") ) {
                    try {
                        var prv = renglon.split(":")[0];
                        if( this.eventos && this.eventos[prv] )
                        this.eventos[prv](renglon.substr(renglon.indexOf(":")+1).trim())
                        this.funciones2.forEach(function(fn){
                            fn( prv, renglon.substr(renglon.indexOf(":")+1).trim() )
                        })
                    }catch(e){}
                }
                if( /Bolon/.test(renglon) ) {
                    [...$.children].forEach(function($hijo, $orden){
                        var $pin = $hijo[GATT]("pin") ;
                        setTimeout( function() {
                        if( $hijo.tagName == "SALIDA-DIGITAL" ) 
                            $.enviar("SALIDA("+$pin+")") ;
                        if( $hijo.tagName == "SALIDA-ANALOGICA" ) 
                            $.enviar("SALIDA(A"+$pin+")") ;
                        if( $hijo.tagName == "SERVO-MOTOR" )
                            $.enviar( "SERVO:HABILITAR("+$pin+")" );
                        if( $hijo.tagName == "ENTRADA-DIGITAL" ) 
                            $.enviar( "SUSCRIBIR("+$pin+")" );
                        if( $hijo.tagName == "ENTRADA-ANALOGICA" )
                            $.enviar( "SUSCRIBIR(A"+$pin+")" ) ;
                        }, 100*$orden);
                        
                        if( /salida|servo/i.test($hijo.tagName) )
                        $hijo.write = function($n) {
                            var $pin = this[GATT]("pin") ;
                            var $esPWM = this[HATT]("pwm") ;
                            var $esServo = this.tagName=="SERVO-MOTOR" ;
                            if( $esServo ) $.enviar( `SERVO:${$pin}?${$n}` );
                            else {
                                if( $n > 0 ) $.enviar( `PRENDER(${$pin})` ) ;
                                else $.enviar( `APAGAR(${$pin})` ) ;
                            }
                        }
                        
                    })
                    if( this.eventos && this.eventos.iniciar ) this.eventos.iniciar() ;
                    if( window.fnArduinoIniciar ) fnArduinoIniciar() ;
                    if( window.fnarduinoiniciar ) fnarduinoiniciar() ;
                    
                }
                if( /ANALOGO\((.*?)\)/.test(renglon) ) {
                    var $r = renglon.match(/ANALOGO\((.*?)\)/)[1].split(",") ;
                    if( $r && this.eventos && this.eventos.analogo ) this.eventos.analogo($r[0], $r[1]) ;
                    if( window.ANALOGO ) ANALOGO($r[0],$r[1]) ;
                    if( window.fnArduinoAnalogo ) fnArduinoAnalogo($r[0],$r[1]);
                }
                if( /DIGITAL\((.*?)\)/.test(renglon) ) {
                    var $r = renglon.match(/DIGITAL\((.*?)\)/)[1].split(",") ;
                    if(this.eventos && this.eventos.digital ) {
                        this.eventos.digital($r[0], $r[1]) ;
                    }
                    if( window.fnArduinoDigital ) fnArduinoDigital($r[0],$r[1]) ;
                    if( window.fnarduinodigital ) fnarduinodigital($r[0],$r[1]) ;
                    if( window.DIGITAL ) DIGITAL($r[0],$r[1]);
                }
                if( /CM\((.*?)\)/.test(renglon) ) {
                    if(this.eventos && this.eventos.cm ) {
                        var $r = renglon.match(/CM\((.*?)\)/)[1].split(",");
                        this.eventos.cm($r[0],$[1]) ;
                    }
                    if( window.fnArduinoCM ) fnArduinoCM($r[0],$r[1]) ;
                    if( window.fnarduinocm ) fnarduinocm($r[0],$r[1]) ;
                }
                if( /REMOTO\((.*?)\)/.test(renglon) ) {
                    var $r = renglon.match(/REMOTO\((.*?)\)/)[1].split(",");
                    if(this.eventos && this.eventos.remoto ) {
                        this.eventos.remoto($r[0],$[1]) ;
                    }
                    if( window.fnArduinoRemoto ) fnArduinoRemoto($r[0],$r[1]) ;
                    if( window.fnarduinoremoto ) fnarduinoremoto($r[0],$r[1]) ;
                }
                if( /DHT:HUM\((.*?)\)/.test(renglon) ) {
                    if($r && this.eventos && this.eventos.humedad ){
                        var $r = renglon.match( /DHT:HUM\((.*?)\)/ )[1] ;
                        this.eventos.humedad($r) ;
                    }
                    if( window.fnArduinoHumedad ) fnArduinoHumedad($r) ;
                    if( window.fnarduinohumedad ) fnarduinohumedad($r) ;
                }
                if( /DHT:(.*?)TEMP\((.*?)\)/.test(renglon) ) {
                    if($r && this.eventos && this.eventos.temperatura ){
                        var $r = renglon.match( /DHT:(.*?)TEMP\((.*?)\)/ )[2] ;
                        this.eventos.temperatura($r) ;
                    }
                    if( window.fnArduinoTemperatura ) fnArduinoTemperatura($r) ;
                    if( window.fnarduinotemperatura ) fnarduinotemperatura($r) ;
                }
                renglon = rrenglon[1]||"" ;
            }
            if( this.eventos && this.eventos.data ) this.eventos.data($datos.value);
        }
        if( $datos.done ) {
            console.log( "Lectura detenida", $datos.done ) ;
            this.shadowRoot.querySelector("input[type=checkbox]").removeAttribute("checked") ;
            if(this.eventos && this.eventos.listo) this.eventos.listo($datos.done);
            this.lector.releaseLock() ;
            break ;
        }
    }
   
}

async desconectar( $this ) {
    $this = $this || this ;
    if( !$this.conectado ) return ;
    if( window.AppInventor ) {
        AppInventor.setWebViewString( "desactivararduino" ) ;
        $this.conectado = false ;
        $this.shadowRoot.querySelector("input[type=checkbox]").removeAttribute("checked");
        $this.avisar("Desconectando");    
        return ;
    }
    if( $this.lector ) {
        await $this.lector.cancel() ;
        await $this.inputDone.catch( () => {} ) ;
        $this.lector = null ;
        $this.inputDone = null ;
    }
    if( $this.grabador ) {
        try {
            $this.grabador.close() ;
            await $this.outputDone ;
            $this.outputDone = null ;
            $this.grabador = null ;}
        catch(e){}
    }
    
    await $this.puerto.close() ;
    $this.avisar( "Desconectado" );
    $this.puerto = null ;
    $this.conectado = false ;
}

habilitarProtocolo() {
    var $ = this ;
    window.ARDUINOENVIA=[];
    window.ARDUINO = async function($$) {await $.enviar($$);};
    window.SALIDA = function(n) { ARDUINO("SALIDA("+n+")")};
    window.PRENDER = function(n) {ARDUINO("PRENDER("+n+")")};
    window.APAGAR = function(n) {ARDUINO("APAGAR("+n+")")};
    window.SERVOHABILITAR = function(n){ARDUINO("SERVO:HABILITAR("+n+")")};
    window.SERVO = function(n,ang){ARDUINO("SERVO("+n+"?"+ang+")")};
    window.SUSCRIBIR = function(n){ARDUINO("SUSCRIBIR("+n+")")}
    window.DESUSCRIBIR = function(n){ARDUINO("DESUSCRIBIR("+n+")")}
    window.A0 = 14 ;
    window.A1 = 15 ;
    window.A2 = 16 ;
    window.A3 = 17 ;
    window.A4 = 18 ;
    window.A5 = 19 ;
    window.A6 = 20 ;
    window.A7 = 21 ;

    if( $[HATT]("salidas") ) {
        var split = $[GATT]("salidas").split(" ") ;
        split.forEach(x=>ARDUINO("SALIDA("+x+")"));
        
    }
}


suscribir(fn,segundo) {
    if( segundo ) {
        this.funciones2.push(function($evento,$valor){
            if( $evento == fn ) segundo( $valor, $evento )
        })
    } else
    this.funciones.push(fn)
}

eliminar() {
    this.funciones = [] ;
    this.funciones2 = [];
}

    };window.customElements.define( "arduino-usb", ArduinoUsb );

;class ArduinoSimulado extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Arduino a distancia</summary>
    <div>
        <general-io id="conexion" ></general-io>
        <div center >
            <button conectar >Conectar</button>
            <button desconectar>Desconectar</button>
            <span>Conectado <input type="checkbox" disabled/></span>
        </div>
        <hr>
        <div>
            <label >
                Enviar mensaje:
                <input enviar />
                con Enter <input type="checkbox" conEnter>
                <button enviar>Enviar</button>
            </label>
        </div>
        <hr>
        <div>
            <label >
                Mensaje recibido:
                <textarea resultado ></textarea>
            </label>
        </div>
        <details open >
            <summary>Logs</summary>
            <ul logs>
                
            </ul>
        </details>
    </div>
</details>
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = this.shadowRoot, QS = "querySelector" ;
    var $clave = this[GATT]("clave") ;
    if( $clave )
        $$[QS]("#conexion")[SATT]("clave", $clave) ;
    $$[QS]("[conectar]").onclick = x => $.conectar() ;
    $$[QS]("[desconectar]").onclick = x=> $.desconectar() ;
    $$[QS]("[enviar]").onclick = x => $.enviar_() ;
    $.conexion = $$[QS]("#conexion");
    $$[QS]("input[enviar]").onkeyup = function($teclado) {
        if( /return|enter/i.test($teclado.code) )
        $$[QS]("[enviar]").click();
    }
}

conectar() {
    var $ = this ;
    $.conexion.emitir( "ARDUINO:conectar" ) ;
}

desconectar() {
    this.conexion.emitir( "ARDUINO:desconectar" ) ;
}

enviar_() {
    var $ = this, $$ = $.shadowRoot, QS = "querySelector" ;
    this.conexion.emitir( "ARDUINO:"+$$[QS]("input[enviar]").value ); 
}

enviar( $mensaje ) {
    this.conexion.emitir( "ARDUINO:"+$mensaje );
}

    };window.customElements.define( "arduino-simulado", ArduinoSimulado );

;class ArduinoFirmata extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Arduino Firmata</summary>
    <div>
        <div center >
            <button conectar >Conectar</button>
            <button desconectar>Desconectar</button>
            <span>Conectado <input type="checkbox" disabled/></span>
        </div>
        <hr>
        <div id="info">
            <select multiple></select>
        </div>
        <details open >
            <summary>Logs</summary>
            <ul logs>
                
            </ul>
        </details>
    </div>
</details>
            `;
            if( this.render ) this.render() ; 
        }
render() {    var $=this;
    if( typeof Firmata == "undefined" ) {
        fnScript("https://gorosito.red/dame/firmata/firmata.js", x=>$.render());
        return ;
    }
    if( typeof Buffer == "undefined" ) {
        fnScript("https://gorosito.red/dame/firmata/buffer-es6/index.js", x=>$.render());
        return;
    }
    $.funciones = []; $.funciones2 = [] ;
    $.qs("[conectar]").onclick = x=>{$.conectar($)};
    $.qs("[desconectar]").onclick=f=>{$.desconectar($)};
    $.puerto = null ;
    $.deco = null ;
    $.lector = null ;
    $.grabador = null ;
}

avisar($mensaje){
    var $f = new Date() ;
    var h = $f.getHours();
    var m = $f.getMinutes() ;
    var s = $f.getSeconds() ;
    if( m < 10 ) m = "0"+m ;
    if( s < 10 ) s = "0"+s ;
    this.qs("[logs]")[CODIGO] += `<li>${h}:${m}:${s} - ${$mensaje}</li>`;
    if( this[HATT]("auto") ) $.conectar(1);
}
async conectar($puerto) {
    var $ = this ;
    $.avisar("Solicitando conexión al usuario") ;
    try {
        if( $puerto ) {
            $.puerto = await navigator.serial.getPorts()[0];
        }
        if( !$.puerto )
        $.puerto = await navigator.serial.requestPort({
            filter: [
                  { usbVendorId: 0x2341, usbProductId: 0x0043 }
                , { usbVendorId: 0x2341, usbProductId: 0x0001 }
            ] 
        });
        navigator.serial.addEventListener( "disconnect", function() {
            console.log( "Se ha desconectado" ) ;
            if( $[HATT]("desconexion") ) {
                window[$[GATT]("desconexion")]();
            }
            if( $.eventos && $.eventos.desconectado && typeof $.eventos.desconectado == "function" ) {
                $.eventos.desconectado() ;
            }
            $.desconectar($) ;
        },false);
        await $.puerto.open({baudRate: $[HATT]("express")?115200:($[GATT]("baudios")||57600)});
        console.log("Puerto abierto") ;
        $.transport = new WebSerialTransport( $.puerto );
        $.objeto = new Firmata( $.transport );
        $.qs("input[type=checkbox]")[SATT]("checked","checked");
        $.avisar("Activado");
        $.conectado=true ;
        $.objeto.on(
            "ready"
            , function() {
                if( $[HATT]("listo") ) window[$[GATT]("listo")]($.objeto);
                [...$.children].forEach((x,o)=>{
                    var $esDig = /digi/i.test(x.tagName);
                    $.qs("select").innerHTML += `<option >${x.tagName} de ID "${x.id}" conectado en pin ${x[GATT]("pin")}</option>` ;
                    switch( x.tagName ) {
                        case "SALIDA-DIGITAL": case "SALIDA-ANALOGICA":
                            $.objeto.pinMode( 
                                x[GATT]("pin")||13
                                , x[HATT]("pwm") ? $.objeto.MODES.PWM : $.objeto.MODES.OUTPUT 
                            );
                            x.value = x.valor = 0 ;
                            x.write = function($valor=0) {
                                this.value = this.valor = $valor ;
                                $.objeto
                                    [( this[HATT]("pwm") ? "pwm" : ($esDig?"digital":"analog") )+"Write"]( 
                                        this[GATT]("pin")||13
                                        , $valor 
                                    )
                                ;
                            }
                            break ;
                        case "ENTRADA-DIGITAL": case "ENTRADA-ANALOGICA":
                            $.objeto.pinMode( 
                                x[GATT]("pin")||13
                                , $.objeto.MODES.INPUT
                            );
                            x.read = function( $fn, $soloUnaVez ) {
                                x.segunda = 0 ;
                                $.objeto[ ($esDig?"digital":"analog")+"Read" ](
                                    this[GATT]("pin")
                                    , typeof $fn == "function" 
                                        ? (!$soloUnaVez ? $fn : function( $valor ) {
                                            if( !x.segunda ) {
                                                $fn($valor) ;
                                                x.segunda = 1 ;
                                            }
                                            $.objeto["report"+($esDig?"Digital":"Analog")+"Pin"](x[GATT]("pin"),0);
                                        })
                                        : (
                                            typeof $fn=="string" 
                                            ? function(x){
                                                var d = document.querySelector($fn) ;
                                                if( d instanceof HTMLInputElement ||
                                                    d instanceof HTMLTextAreaElement
                                                    || d instanceof HTMLSelectElement)
                                                    d.value = x ;
                                                else d.setHTML( x ) ;
                                            } 
                                            : function(x){
                                                if( $fn instanceof HTMLInputElement ||
                                                    $fn instanceof HTMLTextAreaElement
                                                    || $fn instanceof HTMLSelectElement)
                                                    $fn.value = x ;
                                                else $fn.setHTML( x ) ;
                                                
                                            }
                                    )
                                );
                                console.log( "Suscripto al pin " + ($esDig?"":"A") + this[GATT]("pin") )
                            }
                            if( x[HATT]("eventos") ) try{
                                x.read( window[x[GATT]("eventos")] );
                            }catch(e){console.log( "Probablemente "+x[HATT]("eventos")+" no está definido", e ) }
                            x.cancel = function( $fn ) {
                                $.objeto[ "report"+($esDig?"Digital":"Analog")+"Pin" ]( this[GATT]("pin"), 0 ) ;
                                console.log( "Se canceló la suscripción al pin " + this[GATT]("pin") )
                            }
                            break ;
                        case "SERVO-MOTOR":
                            $.objeto.servoConfig( x[GATT]("pin"), x[GATT]("min")||0, x[GATT]("max")||180  ) ;
                            x.angulo = 0 ;
                            x.write = function( $valor ) {
                                $.objeto.servoWrite( this[GATT]("pin"), $valor ) ;
                                this.angulo = $valor ;
                            }
                            break;
                        default:
                    }
                })
            }
        );
        $.objeto.on(
            "close"
            , function() {
                if( $[HATT]("desconectado") ) window[$[GATT]("desconectado")]($.objeto);
                else console.log( "Arduino desconectado" );
            }
        )
        
    } catch($e){
        $.avisar( "El usuario canceló" );
        console.log( $e )
    }
}


async desconectar( $this ) {
    var $ = $this || this ;
    if( !$.conectado ) return ;
    $.objeto.serialClose() ;
    await $.puerto.close() ;
    $.avisar( "Desconectado" );
    $.puerto = null ;
    $.conectado = false ;
}

digitalWrite( $pin, $estado ) {var $=this;
    if( $.conectado ) $.objeto.digitalWrite( $pin, $estado );
}
analogWrite( $pin, $estado ) {var $=this;
    if( $.conectado ) $.objeto.analogWrite( $pin, $estado );
}
pwmWrite( $pin, $estado ) {var $=this;
    if( $.conectado ) $.bjeto.pwmWrite( $pin, $estado ) ;
}
digitalRead( $pin, $refVar ) {var $=this;
    if( !$.conectado ) return null ;
    $.objeto.digitalRead( $pin, function(n){
        $refVar(n) ;
        $.objeto.reportDigitalPin($pin,0);
    })
}
analogRead( $pin, $refVar ) {var $=this;
    if( !$.conectado ) return null ;
    $.objeto.analogRead( $pin, function(n){
        $refVar(n) ;
        $.objeto.reportAnalogPin($pin,0);
    })
}

pinMode( $pin, $tipo ) { var $=this;
    if( !$.conectado ) return null ;
    $.objeto.pinMode( $pin, $tipo );
}
    };window.customElements.define( "arduino-firmata", ArduinoFirmata );

;class ParaHablar extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
:host {
    
}

div {
    
}

${DETAILS}</style>
<div >
    <details>
        <summary>Para pronunciar</summary>
        <div>
            <input type="text" placeholder="Escribí aquí para pronunciar">
            <button hablar>Hablar</button>
            <button detener>Detener</button>
            <button pegar>Pegar</button>
            <button borrar>Borrar</button>
        </div>
    </details>
</div>
            `;
            if( this.render ) this.render() ; 
        }
decir($mensaje) {
    if(window.AppInventor){AppInventor.setWebViewString("hablar:"+$mensaje);return;}
    var $=this;
    $.voces=[];
    if($.cancelable)$.cancelar();
    $.utt=new SpeechSynthesisUtterance($mensaje+"");
    $.utt.voice=
        speechSynthesis
        .getVoices()
        .filter(
            function($cadaVoz) {
                $.voces.push($cadaVoz);
                return /españ/i.test($cadaVoz) ;
            }
        )
        [0]
    ;
    speechSynthesis.speak($.utt) ;
}

render(){
var $=this ;
if($[HATT]("cancelable"))$.cancelable=true;
var $$=$.shadowRoot;
var $in=$$[PRIMER]("input");
function b($){return $$[PRIMER](`[${$}]`)}
b("hablar").onclick=function(){$.decir($in.value)};
b("detener").onclick=function(){$.cancelar()};
b("pegar").onclick=function(){$in.select();document.execCommand("paste")};
b("borrar").onclick=function(){$in.value="";$in.focus()};
$in.onkeyup = function(tecla){
if(tecla.code=="Enter")b("hablar").click();
if(tecla.code=="Escape")b("detener").click();
};
}

cancelar() {
    if( window.AppInventor ) {
        AppInventor.setWebViewString( "stopvoz" ) ;
        return ;
    }
    speechSynthesis.cancel() ;
}


    };window.customElements.define( "para-hablar", ParaHablar );

;class LectorQr extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ;
    color: white ;
    cursor: pointer ;
    padding: 5px ;
}
summary+div {
    padding: 10px ;
    text-align: center ;
    border: 1px dotted grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px;
}
button {
    padding: 5px ;color: white;
}
#_comenzar{background:green;border-top-left-radius: 10px;border-bottom-left-radius: 10px;}
#_terminar{background:red;border-top-right-radius: 10px;border-bottom-right-radius: 10px;}</style>
<details >
    <summary>Lector de código QR</summary>
    <div>
        <div style="color: red;" class="advertencia" >
            <script>
                if( location.href.indexOf("http://")+1 ) 
                document.write( "La cámara web no se visualiza en sitios no seguros" ) ;
            </script>
        </div>
        <div ><input placeholder="Resultados..."></div>
        <div class="botonera" data-role="controlgroup" data-type="horizontal">
            <button id="_comenzar" >
                Activar lector
            </button>
            <button id="_terminar" >
                Cortar lectura
            </button>
        </div>
        <video ></video>
    </div>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if( !window.Instascan ) {
        fnScript("https://rawgit.com/schmich/instascan-builds/master/instascan.min.js",x=>{
            $.scanner = new Instascan.Scanner({video:$$[PRIMER]("video")})
            console.log("Instascan descargado");
            $.render();
        })
        return;
    }
    if( $[HATT]("eventos") ) $.eventos = window[ $[GATT]("eventos") ] ;
    $.scanner = new Instascan.Scanner({
        video: $$[PRIMER]("video")
    });
    $.scanner.addListener(
        "scan"
        , function($texto) {
            $$[PRIMER]("input").value=$texto ;
            console.log($texto);
            if($.eventos){
                if(typeof $.eventos=="function" ) $.eventos($texto) ;
                else try { $.eventos.data($texto) }catch(e){console.log(e)}
            }
        }
    );
    $$[PRIMER]("#_comenzar").onclick=function(){$.comenzar()};
    $$[PRIMER]("#_terminar").onclick=function(){$.detener()};
}

comenzar() {var $=this,$$=$.shadowRoot;
    Instascan
        .Camera
        .getCameras()
        .then(
            function($camarasDetectadas) {
                if( $camarasDetectadas.length == 2 )
                    $.scanner.start( $camarasDetectadas[1] ) ;
                else if( $camarasDetectadas.length == 1 )
                    $.scanner.start( $camarasDetectadas[0] ) ;
                if( $.eventos && typeof $.eventos!="function" && $.eventos.iniciar ) 
                $.eventos.iniciar() ;
            }
        )
        .catch(
            function($error){
                console.log($error);
                if( $.eventos && typeof $.eventos!="function" && $.eventos.error ) 
                $.eventos.error() ;
            }
        )   
}

detener() {this.scanner.stop() ; if( this.eventos && typeof this.eventos!="function" && this.eventos.fin )this.eventos.fin() }
    };window.customElements.define( "lector-qr", LectorQr );

;class LectorCodigo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ;
    color: white ;
    cursor: pointer ;
    padding: 5px ;
}
summary+div {
    padding: 10px ;
    text-align: center ;
    border: 1px dotted grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px;
}
button {
    padding: 5px ;color: white;
}
#_comenzar{background:green;border-top-left-radius: 10px;border-bottom-left-radius: 10px;}
#_terminar{background:red;border-top-right-radius: 10px;border-bottom-right-radius: 10px;}</style>
<details >
    <summary>Lector de código <span></span>  </summary>
    <div>
        <div style="color: red;" class="advertencia" >
            <script>
                if( location.href.indexOf("http://")+1 ) 
                document.write( "La cámara web no se visualiza en sitios no seguros" ) ;
            </script>
        </div>
        <div ><input placeholder="Resultados..."></div>
        <div class="botonera" data-role="controlgroup" data-type="horizontal">
            <button id="_comenzar" >
                Activar lector
            </button>
            <button id="_terminar" >
                Cortar lectura
            </button>
        </div>
        <video ></video>
    </div>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this,$$=$.shadowRoot;
    if( !window.ZXing ) {
        fnScript("https://unpkg.com/@zxing/library@latest",X=>{
            var TIPO = "QRCode" ;
            if( $[HATT]("barra") ) TIPO = "Barcode" ;
            if( $[HATT]("barras") ) TIPO = "Barcode" ;
            if( $[HATT]("pdf417") ) TIPO = "PDF417" ;
            $.scanner = new ZXing["Browser"+TIPO+"Reader"]();
            console.log("ZXing descargado");
            $.render();
        });
        return
    }
    if( $[HATT]("eventos") ) $.eventos = window[ $[GATT]("eventos") ] ;
    $.scanner.getVideoInputDevices().then(function($camaras){
        if( !$camaras.length ) return ;
        $.camara = $camaras[0].deviceId ;
        if( $camaras.length > 1 ) $.camara = $camaras[1].deviceId ;
    })
    $$[PRIMER]("#_comenzar").onclick = f => $.comenzar() ;
    $$[PRIMER]("#_terminar").onclick = f=>$.detener() ;
}

comenzar() {var $=this,$$=$.shadowRoot;
    $.scanner.decodeFromInputVideoDeviceContinuously(
        $.camara, $$[PRIMER]("video"), (result, err) => {
        if (result) {
          $$[PRIMER]("input").value = result ;
          if( $[HATT]("eventos") ) {
            try{window[$[GATT]("eventos")](result)}catch(e){
                try{window[$[GATT]("eventos")].data(result)}catch(e){}
            }
          }
        }

        if (err) {
          if( $[HATT]("eventos") ) {
            try{window[$[GATT]("eventos")].error(
                err instanceof ZXing.ChecksumException ? "Código leído inválido"
                : err instanceof ZXing.FormatException ? "Código encontrado inválido"
                : "Sin código"
            )}catch(e){}
          }

        }
      }
    )
}

detener() {this.scanner.reset() }
    };window.customElements.define( "lector-codigo", LectorCodigo );

;class CodigoQr extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div>
    <center>
        <main></main>
        <span></span>
    </center>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this;
    if( !window.QRCode )
        return fnScript("https://gorosito.red/dame/qrcode.js",x=>$.render());
    $.actualizar() ;
}

actualizar() {
    var $ = this, $$ = $.shadowRoot, $$$ = {}, l = 0 ;
    $$$.text = $.innerHTML.trim()||location.href;
    l = $[GATT]("lado")||$[GATT]("medida")||$[GATT]("ancho")||$[GATT]("alto")||400;
    $$$.width = l ;
    $$$.height = l ;
    $.objeto = 
        new QRCode( 
            $.qs("main")
            , $$$
        )
    ;
    if( $[HATT]("con-texto") ) $.qs("span").innerHTML = $$$.text ;
}


    };window.customElements.define( "codigo-qr", CodigoQr );

;class CodigoBarras extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div>
    <center>
        <svg></svg>
    </center>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this;
    if( !window.JsBarcode ) {
        fnScript("https://cdn.jsdelivr.net/jsbarcode/3.3.7/JsBarcode.all.min.js",x=>$.actualizar());
        return
    }
    $.actualizar() ;
}

actualizar() {
    var $ = this, $$ = $.shadowRoot, $$$ = {}, l = 0 ;
    $$$.text = $[CODIGO].trim()||location.href;
    l = $[GATT]("lado")||l;
    l = $[GATT]("medida")||l;
    l = $[GATT]("ancho")||l;
    l = $[GATT]("alto")||l;
    if(l) {
    $$$.width = l ;
    $$$.height = l;
    }
    $.objeto = 
        JsBarcode( 
            $$[PRIMER]("svg")
            , $$$.text
        )
    ;
}


    };window.customElements.define( "codigo-barras", CodigoBarras );

;class MarcadorHiro extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div>Cargando Aframe y ARjs</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    //$.s = false ;
    console.log( "Iniciado... Cargando todo" ) ;
    if( !window.AFRAME ) {
        $.SCRIPT1 = document.createElement("script") ;
        $.SCRIPT1.src = "https://aframe.io/releases/1.0.0/aframe.min.js" ;
        $.SCRIPT1.onload = function() {
            console.log( "Aframe instalado" ) ;
            $.s = true ;
            $.render() ;
        };
        document.head.appendChild( $.SCRIPT1 ) ;
        return ;
    }
    if( !window.ARjs ) {
        $.s = false ;
        $.SCRIPT2 = document.createElement("script") ;
        $.SCRIPT2.src = "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js" ;
        $.SCRIPT2.onload = function() {
            console.log( "AR para Aframe instalado" ) ;
            $.render() ;
        }
        document.head.appendChild( $.SCRIPT2 ) ;
        return ;    
    }

    // Interior
    var aScene = document.querySelector("a-scene") ;
    aScene[SATT]("embedded", 1) ;
    aScene[SATT]("arjs", 1) ;
    var aMarker = document.createElement( "a-marker" ) ;
    if( $[HATT]("patron") ) {
        aMarker[SATT]("type", "pattern") ;
        aMarker[SATT]("url", $[GATT]("patron")) ;
    }
    else {
        aMarker[SATT]("preset","hiro") ;
    }
    aScene.appendChild( aMarker ) ;
    var aSphere = document.createElement( "a-sphere" ) ;
    aSphere[SATT]("position", "0 0 -3") ;
    aSphere[SATT]("radius", 2) ;
    aMarker.appendChild( aSphere ) ;

    // -Interior

    console.log( "Instalando" ) ;
}
    };window.customElements.define( "marcador-hiro", MarcadorHiro );

;class ClippyAmigos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
details>summary {
    background: black; color: white ; padding: 5px ;
    cursor: pointer ;
}
main {
    text-align: center ;
    padding: 10px ;
}
</style>
<details>
    <summary>Clippy - Comenzar</summary>
    <main>
        <section>
            <button comenzar>Comenzar</button>
            <button animar>Animar</button>
            <button detener>Detener</button>
            <button mostrar>Mostrar</button>
            <button ocultar>Ocultar</button>
        </section>
        <hr>
        <div>
            
            <input placeholder="Hola">
            <button hablar>Hablar</button>
        </div>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( $[HATT]("auto") ) $.cargar() ;
    $$[PRIMER]("[animar]").onclick=z=>$.animar();
    $$[PRIMER]("[mostrar]").onclick=z=>$.mostrar();
    $$[PRIMER]("[ocultar]").onclick=z=>$.ocultar();
    $$[PRIMER]("[hablar]").onclick=z=>$.decir($$[PRIMER]("input").value);
}

cargar() {
    var $ = this, $$ = $.shadowRoot ;
    if(!window.jQuery){
        fnScript("https://code.jquery.com/jquery-1.12.4.min.js",x=>$.render());return
    }
    if(!window.clippy){
        fnScript("https://gorosito.red/dame/clippy/clippy.js",x=>{
            clippy.load(
                $[HATT]("mago") ? "Merlin"
                : $[HATT]("gato") ? "Links"
                : $[HATT]("perro") ? "Rover"
                : $[HATT]("gorila") ? "Bonzi"
                : $[HATT]("loro") ? "Peedy"
                : $[HATT]("einstein") ? "Genius"
                : $[HATT]("genio") ? "Genie"
                : $[HATT]("f1") ? "F1"
                : $[HATT]("perro2") ? "Rocky"
                : "Clippy"
                , $personaje=>{
                    $.objeto = $personaje ;
                    $.objeto.show() ;
                    $.objeto.speak( "Hola!" ) ;
                    $.visible = true ;
                }
            )
        });fnLink("https://gorosito.red/dame/clippy/clippy.css")
    }
}

animar($nombre) {
    if( !this.objeto ) return ;
    if( !this.visible ) return ;
    if( !$nombre ) 
        return this.objeto.animate() ;
    this.objeto.play($nombre);
}

decir( $mensaje ) {
    if( !this.objeto ) return ;
    if( !this.visible ) return ;
    this.objeto.speak( $mensaje ) ;
}

detener() {
    if(!this.objeto) return ;
    this.objeto.stop();
}

mostrar() {
    if( !this.objeto ) return ;
    if( this.visible ) return ;
    this.objeto.show()
    this.visible = true ;
}

ocultar(){
    if( !this.objeto ) return ;
    if( !this.visible ) return ;
    this.objeto.hide()
    this.visible = false ;
}
    };window.customElements.define( "clippy-amigos", ClippyAmigos );

;class DetectorMovimiento extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
video, [c1] {
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
}

[cf] {
  display: block;
  margin: 0 auto;
}</style>
<details >
    <summary>Detector de Movimiento</summary>
    <div>
        <video ></video>
        <canvas c1></canvas>
        <canvas cf></canvas>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.DetectorDeMovimiento ) {
        return fnScript("https://gorosito.red/componentes/detector-movimiento/script.js", x=>$.render()) ;
    }
    console.log( $$.querySelector("video") ) ;
    DetectorDeMovimiento( 
          $$.querySelector("video")
        , $$.querySelector("[c1]") 
        , $$.querySelector("[cf]")
    );
    DetectorDeMovimiento.init() ;
}
    };window.customElements.define( "detector-movimiento", DetectorMovimiento );

;class SintonizadorAudio extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}
canvas {
    box-shadow: 5px 5px 5px grey ;
}
</style>
<details open>
    <summary >Sintonizador de Audio</summary>
    <div>
        <center>
            <canvas ></canvas>
        </center>
        <p>
            <center>
                Resultado: <input type="text" >
            </center>
        </p>
        <center>
            <button activar>Comenzar</button>
        </center>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render () {var $=this;
    if( !window.tuner ) {
        return fnScript("https://gorosito.red/dame/tuner.js",x=>$.render());
    }
    $.canvas = $.qs("canvas") ;
    $.input = $.qs("input") ;
    $.eventos = window[ $[GATT]("eventos") ] ;
    $.boton = $.qs("button") ;
    $.boton.onclick = function() {
        $.habilitar() ;
    }
    if( $[HATT]("auto") ) $.boton.click() ;
}

habilitar() {var $=this;
    $.objeto = tuner(
        $.canvas
        , $[HATT]("nota")
        , $[HATT]("osciloscopio")
        , function(x) { 
            $.input.value = x ;
            $.eventos ? $.eventos( x ) : console.log(x);
        }
        , function(x) {
            console.warn( "Sintonizando", x ) ;
        }
    )

}
    };window.customElements.define( "sintonizador-audio", SintonizadorAudio );

;class ReconocerVoz extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary+div {
    text-align: center ;
    border:1px solid grey ;
    padding: 5px;
}
summary {
    background: black ;
    color: white ;
    padding: 5px ;
    cursor: pointer ;
}
#idReconocido {
    width: 80% ;
}
#idAcierto {
    width: 15% ;
}
[reconocer] {
    padding: 10px;
    background: green ;color: white;
    border-top-left-radius: 10px ;
    border-bottom-left-radius: 10px ;
    margin: 0 ;
}
[detener] {
    padding: 10px; 
    margin: 0 ;
    background: red ; color: white ;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
}</style>
<details >
    <summary>Reconocedor de voz</summary>
    <div>
        <div>
            <button reconocer >Reconocer</button>
            <button detener >Detener</button>
        </div>
        <div>
            <input type="text" id="idReconocido" placeholder="Texto reconocido...">
            <input type="range" id="idAcierto" disabled />
            <button copiar>Copiar</button>
        </div>
        <div>
            Reconociendo: 
            <input type="checkbox" id="idReconociendo" disabled />
        </div>
        <details>
            <summary>Log</summary>
            <div>
                <ul>
                </ul>
            </div>
        </details>
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this;
    $.objReconocer = new webkitSpeechRecognition() ;
    $.objReconocer.lang = "es-ES" ;
    if( $[HATT]("escolar") ) $.escolar = true ;
    if( $[HATT]("idioma") ) {
        if( /ingl/i.test($[GATT]("idioma")) ) 
            $.objReconocer.lang = "en-US";
        else
            $.objReconocer.lang = $[GATT]("idioma");
    }
    var btnReconocer = $.qs("[reconocer]"), btnDetener = $.qs("[detener]"), idReconocido = $.qid( "idReconocido" ) ;
    $.qs("[copiar]").onclick=()=>{
        idReconocido.select();
        document.execCommand("copy");
        if( window.Swal ) {
            Swal.fire({title:"Copiado", text:"Texto copiado", type:"success", toast: true,position:"bottom"});
        }
    };
    btnReconocer.onclick = ()=>{
        console.log("Para reconocer");
        $.reconocer();
    };
    btnDetener.onclick = ()=> {
        $.detener() ;
    };
    if( location.href.includes("http://") ) { 
        if( window.Swal ) {
            Swal.fire("Advertencia", "Reconocimiento de voz no funciona en http://", "warning")
        }
        else {
            alert( "Reconocimiento de voz no funciona en http://; pasar a https://" )
        }
    }
    if(window.process){
        console.log("NWJS o Electron");
        $.qs("summary").innerHTML+="Cuidado Electron/NW.js no puede acceder al reconocimiento de voz de Google";
    }
    if( navigator.userAgent.toLowerCase().includes("opera") ) {
        $.qs("summary").innerHTML = "Reconocimiento de voz No funciona en ópera";
    }
}

reconocer() {
    var $=this,$$=$.objReconocer;
    if( window.AppInventor ) {
        AppInventor.setWebViewString("voz") ;
        return ;
    }
    $$.continuous = 
        /android/i.test(navigator.userAgent)? false 
        : (
            ($[HATT]("continuo") 
            && $[GATT]("continuo").trim() == "no" )
            ? false : true
        )
    ;
    $$.interimResults = true ;
    $$.check = $.qid("idReconociendo");
    $$.input = $.qid("idReconocido");
    $$.acierto = $.qid("idAcierto");
    $$.ref = $ ;
    $$.onstart = $.fnAlComienzo ;
    $$.onerror = $.fnHuboError ;
    $$.onend = $.fnYaTermino ;
    $$.onresult = $.fnAlgoLeyo ;
    $$.start() ;
}

detener() {
    if( window.AppInventor ) {
        AppInventor.setWebViewString("stopvoz");
    }
    else
    this.objReconocer.stop() ;
    this.qs("ul").innerHTML+=`<li>${this.hora()} - Solicitando detener</li>`
}

fnAlComienzo() {
    this.check.setAttribute("checked","checked") ;
    console.log( "Reconociendo..." );
    this.ref.shadowRoot.querySelector("ul").innerHTML+=`<li>${this.ref.hora()} - Escuchando y reconociendo</li>`
}

fnHuboError($error) {
    this.check.removeAttribute("checked");
    var $ul = this.ref.shadowRoot.querySelector("ul");
    if($error.error=="not-allowed"){
        $ul.innerHTML = `<li>${this.ref.hora()} - Error: El usuario NO ACEPTÓ el micrófono</li>`;
        console.error("El usuario no aceptó el micrófono")
    }
    else {
        console.error( $error.error ) ;        
        $ul.innerHTML+=`<li>${this.ref.hora()} - Error: [${$error.error}]</li>`

    }
}

fnYaTermino() {
    this.check.removeAttribute("checked") ;
    console.log( "Finalizó el reconocimiento de voz" );
    this.ref.shadowRoot.querySelector("ul").innerHTML+=`<li>${this.ref.hora()} - Se detuvo</li>`;
    
}

fnAlgoLeyo($que) {var $=this;
  $.input.value = $que.results[0][0].transcript ;
  $.input.value = $.input.value.replaceAll( /coma/ig, ", " ).replaceAll( /punto/ig, ". " ) ;
  if( /finalizad/i.test($.input.value) ) {
      $.ref.detener();
      $.input.value = $.input.value.substr( 0, $.input.value.lastIndexOf("finalizad") );
  }
  $.acierto.value = $que.results[0][0].confidence*100 ;
  if( $que.results[0].isFinal ) {
      $.ref.shadowRoot.querySelector("ul").innerHTML+=`<li>${$.ref.hora()} - Detectado [${$.input.value}]</li>`
      if( !$.ref.hasAttribute("eventos") ) return ;
      var $eventos = $.ref.getAttribute("eventos") ;
      try {
        window[$eventos]( $.input.value.replaceAll( /coma/ig, ", " ).replaceAll( /punto/ig, ". " ) );
      }
      catch(e){
            console.error( "¡Probablemente en el atributo eventos no se apunte a la variable correcta!" );
            console.error(e)
      }
  }
}


    };window.customElements.define( "reconocer-voz", ReconocerVoz );

;class ReconocerCirculos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}
img {
    position:absolute;
}
video, svg {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    transform: translate(-50%);
}
div{
    text-align:center
}
svg {
    position:absolute;
}

circle, text,image {
    transition: 200ms all ;
    fill: rgba( 100,100,100, .5 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Reconocer círculos - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <!--button detenercam disabled >Detener cámara</button-->
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <svg width="640" height="480" >
                <circle nariz></circle>
                <circle ojoizq></circle>
                <circle ojoder></circle>
                <circle externon></circle>
                <circle ombligo></circle>
                <circle hombroizq></circle>
                <circle hombroder></circle>
                <circle></circle>
                <circle></circle>
                <image imagennariz></image>
                <image imagenojoizq></image>
                <image imagenojoder></image>
                <image imagenexternon></image>
                <image imagenombligo></image>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
            <img  >
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
async render () {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.tf ) {
        $.qs("span").innerHTML = "Cargando TensorFlow" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js", z=>$.render()) ;
        return ;
    }
    $.qs("img").src = $[GATT]("imagen") ;
    $.qs("span").innerHTML = "Librerías cargadas, activando Reconocimiento de círculos" ;
    setTimeout(
        async function() {
            await tf.ready();

            $.delay = parseInt( $[GATT]("delay") || $[GATT]("espera") || 200 ) ;
            $.eventos = $[GATT]("eventos") ;
            $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
            $.qs("[activarcam]").onclick = function(){$.activarcam()}
            "nariz.ojoizq.ojoder.externon.ombligo.hombroizq.hombroder".split(".").forEach(function(n){
                $[n] = $.qs(`[${n}]`)
            });
            if( $[HATT]("imagen") ) {
                var i = $.qs("img");
                $.imagen = i ;
                i[SATT]("width", $[HATT]("ancho") || 100 );
                i[SATT]("height", $[HATT]("alto") || 100 );
                i[SATT]("src", $[GATT]("imagen") );
            }
            $.svg = $.qs("svg");
            console.log($.svg)
            try {
                window.fnReconocerCirculos($.svg) ;
            } catch(e){console.log(e)}
            if( $[HATT]("auto") ) $.qs("[activarcam]").click() ;
        
        }
        ,2000
    )
}

activarcam() {
    var $=this,$$=$.shadowRoot;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.qs("video").srcObject=n;
        $.qs("video").onloadeddata=function() {
            $.habilitar();
            $.qs("[habilitar]").onclick = function() {
                console.log( "Comenzar a predecir" )
                $.predecir() ;
            }
        }
    })
}

habilitar() {
    var $=this,$$=$.shadowRoot;
    $.el("detener").onclick = function() {$.detener()};
    $.el("detener").style.background="green";
    $.el("habilitar").onclick = null ;
    $.el("habilitar").style.background="grey";
    var s=$$.querySelector("svg");
    var c=getComputedStyle($.qs("video"));
    setTimeout(function(){
    s.style.top = c.top ;
    s.style.left = c.left ;
    },100)
    $.predecir();
    
}

async predecir() {
    var $ = this, $$ = this.shadowRoot ;
/*    if( !$.modelo ) {
        return ;
    }*/
    
    $.detectCircles( tf.browser.fromPixels( $.qs("video") ) ) ;
    
    console.log( "He predicho" ) ;
    /*$tensorImagen = tf.browser.fromPixels( $.qs("img") );
    detectCircles( $tensorImagen ) ;

    var predicciones = await $.detector.estimatePoses( $.qs("video") );
    var $rects = $.qsa("circle") ;
    if( predicciones.length ) {
        var pred = predicciones[0] ;
        try{
            window[$.eventos]({
                izq: {
                    ceja: pred.keypoints[1]
                    , ojo: pred.keypoints[3]
                    , hombro: pred.keypoints[5]
                    , codo: pred.keypoints[7]
                    , mano: pred.keypoints[9]
                    , cadera: pred.keypoints[11]
                    , rodilla: pred.keypoints[13]
                    , pie: pred.keypoints[15]
                }
                , der: {
                    ceja: pred.keypoints[2]
                    , ojo: pred.keypoints[4]
                    , hombro: pred.keypoints[6]
                    , codo: pred.keypoints[8]
                    , mano: pred.keypoints[10]
                    , cadera: pred.keypoints[12]
                    , rodilla: pred.keypoints[14]
                    , pie: pred.keypoints[16]
                    
                }
            },predicciones)
        } catch(e){}
        $rects[0][SATT]("cx",pred.keypoints[0].x);
        $rects[0][SATT]("cy",pred.keypoints[0].y);
        $rects[0][SATT]("r",5);

        $rects[1][SATT]("cx",pred.keypoints[1].x);
        $rects[1][SATT]("cy",pred.keypoints[1].y);
        $rects[1][SATT]("r",5);

        $rects[2][SATT]("cx",pred.keypoints[2].x);
        $rects[2][SATT]("cy",pred.keypoints[2].y);
        $rects[2][SATT]("r",5);

        $rects[3][SATT]("cx",(pred.keypoints[5].x+pred.keypoints[6].x)/2);
        $rects[3][SATT]("cy",(pred.keypoints[5].y+pred.keypoints[6].y)/2);
        $rects[3][SATT]("r",5);
        $rects[4][SATT]("cx",(pred.keypoints[11].x+pred.keypoints[12].x)/2);
        $rects[4][SATT]("cy",(pred.keypoints[11].y+pred.keypoints[12].y)/2);
        $rects[4][SATT]("r",5);
        
        $rects[5][SATT]("cx", pred.keypoints[5].x)
        $rects[5][SATT]("cy", pred.keypoints[5].y)
        $rects[6][SATT]("cx", pred.keypoints[6].x)
        $rects[6][SATT]("cy", pred.keypoints[6].y)
        $rects[5][SATT]("r",5)
        $rects[6][SATT]("r",5)
    }
    */
    if( isNaN( $.delay ) ) $.ciclo = setTimeout( function(){$.predecir()}, 100 );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}
detener() {
    var $=this,$$=$.shadowRoot;
    if( isNaN($.delay) ) clearTimeout( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.el("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.el("detener").onclick = null ;
    $.el("detener").style.background="grey";
    $.el("habilitar").style.background="green";
   var c = Array.from($.qsa("circle"));
    c.forEach(x=>x[SATT]("r",0));
}
el(n){return this.qs("["+n+"]")}
els(n){return this.qsa("["+n+"]")}

ubicar($nombre) {
    return this.qs("svg").qs("["+$nombre+"]")
}

async detectCircles( dadaImagenTensor, dadoThreshold = 100 ) {
  // Convertir la imagen a escala de grises
  const TGris = tf.image.rgbToGrayscale( dadaImagenTensor );

  // Aplicar un filtro de Canny para detección de bordes
  //const TBordes = tf.image.sobel_edges( TGris );
  // Definir los kernels de Sobel
  //const kernelX = tf.tensor2d([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]);
  //const kernelY = tf.tensor2d([[-1, -2, -1], [0, 0, 0], [1, 2, 1]]);
const kernelX = tf.expandDims(tf.expandDims(tf.tensor2d([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]]), 2), 3);
const kernelY = tf.expandDims(tf.expandDims(tf.tensor2d([[-1, -2, -1], [0, 0, 0], [1, 2, 1]]), 2), 3);

  // Aplicar convolución con los kernels de Sobel
  const sobelX = tf.conv2d( tf.cast(TGris, 'float32'), kernelX, 1, 'same' );
  const sobelY = tf.conv2d( tf.cast(TGris, 'float32'), kernelY, 1, 'same' );

  // Calcular la magnitud del gradiente
  const TBordes = tf.sqrt(tf.add(tf.square(sobelX), tf.square(sobelY)));

  // Puedes aplicar un umbral para obtener una imagen binaria de bordes
  const TBordesBinarios = TBordes.greater(tf.scalar(50));

  // Aplicar la detección de círculos (puedes reutilizar la función detectCircles anterior)

  // Liberar memoria
  kernelX.dispose();
  kernelY.dispose();
  sobelX.dispose();
  sobelY.dispose();

  // Encontrar contornos en la imagen binaria
  const TContornos = tf.image.findContours( TBordesBinarios, 0.1, 1 );

  // Filtrar contornos que se asemejan a círculos
    const TCirculos = TContornos.filter(
        cadaContorno => {
            const TArea = tf.sum( cadaContorno ).dataSync()[0];
            const TPerimetro = 
              tf.sum(
                tf.sqrt(
                    tf.squaredDifference(
                        cadaContorno
                        , tf.roll(cadaContorno, 1, 0)
                    )
                )
              ).dataSync()[0]
            ;
            const TCircularidad = 
                4 * Math.PI 
                * (TArea / (TPerimetro * TPerimetro))
            ;

    // Ajusta este valor según sea necesario para filtrar círculos
            return TCircularidad > 0.5 && cadaContorno.shape[0] > 50;
        }
    );

  // Puedes devolver las coordenadas de los círculos encontrados
  return TCirculos.map( cadaCirculo => cadaCirculo.arraySync());
}

/*
// Uso
const img = document.getElementById('tuImagen'); // Reemplaza 'tuImagen' con el ID de tu imagen HTML
const tensor = tf.browser.fromPixels(img);
detectCircles(tensor).then(circles => {
  console.log('Círculos encontrados:', circles);
});
*/
    };window.customElements.define( "reconocer-circulos", ReconocerCirculos );

;class ReconocerCara extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}

main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}

video, svg {
    position: absolute ;
    top: 30 ;
    left: 50% ;
    transform: translate(-50%);
}
div{
text-align:center}
svg {position:absolute;
}

circle, text {
    transition: 100ms all ;
    fill: rgba( 100,100,100, .2 ) ;
}</style>
<details >
    <summary>Reconocer caras - <span>Activando</span><progress min="0" max="4"></progress></summary>
    <main >
        <div >
            <button activarcam disabled >Activar cámara</button>
            <button detenercam disabled >Detener cámara</button>
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
        </div>
        <div fotos >
<video autoplay muted width="640" height="480" ></video>
            <svg width="640" height="480" >
                <circle r="10" fill="rgba(0,0,0,.7)"></circle>
                <circle r="10" fill="rgba(0,0,0,.7)"></circle>
                <circle r="10" fill="rgba(0,0,0,.7)"></circle>
                <circle r="10" fill="rgba(0,0,0,.7)"></circle>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
        </div>
    </main>
</div>
            `;
            if( this.render ) this.render() ; 
        }
async render() {var $=this;$.progreso = $.qs("progress");
    if( !window.tf )
    return fnScript( "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js", x => {
        $.num = 0, $.render()} );
    await tf.ready();
    $.num = ($.num||0) + 1 ;
    $.progreso.value = $.num;
    if( $.num == 1 ) return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter", x=>{$.num++;$.render()});
    if( $.num == 2 ) return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl", x=>{$.num++;$.render()});
    //if( $.num == 3 ) return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/face-detection", x=>{$.num++;$.render()});
    if( $.num == 3 ) return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/face-landmarks-detection", x=>{$.num++;$.render()});
    $.span("Landmarks activadas")
    
    $.objeto = await faceLandmarksDetection.createDetector(
        faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh
        , {
            runtime: "tfjs"
        }
    );
    
    $.video = $.qs("video");
    $.svg = $.qs("svg") ;
    $.svgCir = $.svg.querySelectorAll("circle");
    $.eventos = $[GATT]("eventos") ;
    $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
    $.qs("[activarcam]").onclick = function(){$.activarcam()}
    $.qs("[detenercam]").onclick = function() { clearTimeout($.cancelable)}
}

activarcam() {
    var $=this;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.video.srcObject=n;
        $.video.onloadeddata=function() {
            //$.habilitar();
            $.qs("[habilitar]").onclick = function() {
            $.predecir() ;
        }
    }
        
    })
}

async predecir() {var $=this;
    $.pred = await $.objeto.estimateFaces( $.video );
    if( $.eventos && window[$.eventos] && typeof window[$.eventos] == "function" ) {
        var $persona = $.pred[0];
        if( $persona ) {
            var $puntos = $persona.keypoints ;
            var $map = {
                ojo: {
                    lagrimal: {
                        izq: $puntos[362]
                        , der: $puntos[133]
                        , delta: {
                            x: $puntos[133].x - $puntos[362].x
                            , y: $puntos[133].y - $puntos[362].y
                        }
                    }
                    , externo: {
                        izq: $puntos[263]
                        , der: $puntos[33]
                        , delta: {
                            x: $puntos[33].x - $puntos[263].x
                            , y: $puntos[33].y - $puntos[263].y
                        }
                    }
                    , arriba: {
                        izq: $puntos[386]
                        , der: $puntos[159]
                        , delta: {
                            x: $puntos[159].x - $puntos[386].x
                            , y: $puntos[159].y - $puntos[386].y
                        }
                    }
                    , abajo: {
                        izq: $puntos[380]
                        , der: $puntos[145]
                        , delta: {
                            x: $puntos[145].x - $puntos[380].x
                            , y: $puntos[145].y - $puntos[380].y
                        }
                    }
                    /*, iris: {
                        izq: $puntos[470]
                        , der: $puntos[475]
                        , delta: {
                            x: $puntos[475].x - $puntos[470].x
                            , y: $puntos[475].y - $puntos[470].y
                        }
                        
                    }*/
                }
                , nariz: {
                    punta: {
                        x: $puntos[4].x
                        , y: $puntos[4].y
                    }
                }
                , boca: {
                    labio: {
                        arriba: {
                            x: $puntos[12].x
                            , y: $puntos[12].y
                        }
                        , abajo: {
                            x: $puntos[15].x
                            , y: $puntos[15].y
                        }
                        , delta: {
                            x: $puntos[15].x - $puntos[12].x
                            , y: $puntos[15].y - $puntos[12].y
                        }
                    }
                    , comisura: {
                        izq: {
                            x: $puntos[308].x
                            , y: $puntos[308].y
                            
                        }
                        , der: {
                            x: $puntos[61].x
                            , y: $puntos[61].y
                        }
                        , delta: {
                            x: $puntos[61].x - $puntos[308].x
                            , y: $puntos[61].y - $puntos[308].y
                        }
                    }
                }
                , puntos: $puntos
            } ;
            window[ $.eventos ]( $map );
            $.svgCir[0].setAttribute( "cx", $persona.keypoints[159].x );
            $.svgCir[0].setAttribute( "cy", $persona.keypoints[159].y );
            $.svgCir[1].setAttribute( "cx", $persona.keypoints[386].x );
            $.svgCir[1].setAttribute( "cy", $persona.keypoints[386].y );

            $.svgCir[2].setAttribute( "cx", $persona.keypoints[145].x );
            $.svgCir[2].setAttribute( "cy", $persona.keypoints[145].y );
            $.svgCir[3].setAttribute( "cx", $persona.keypoints[380].x );
            $.svgCir[3].setAttribute( "cy", $persona.keypoints[380].y );
        }
    }
    $.cancelable = setTimeout( x=>$.predecir(), 100 ) ;
}

span($n) {
    this.qs("span").setHTML($n)
}
    };window.customElements.define( "reconocer-cara", ReconocerCara );

;class RedNeuronal extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details>
    <summary>Red neuronal - <span></span></summary> 
    <div>
        
    </div>
</details>            `;
            if( this.render ) this.render() ; 
        }
render(){var $=this;
    if( !window.tf ) {
        return fnScript( "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js", x=>$.render() )
    }
    $.objeto = tf.sequential() ;
    for( var $esteHijo of $.children ) {
        //var $esteHijo = $.children[$cadaHijo] ;
        console.log( $esteHijo )
        if( $esteHijo.tagName.toLowerCase() == "capa" ) {
            var $n = {} ;
            $n.inputShape = [+$esteHijo[GATT]("entradas") || 2];
            $n.units = +$esteHijo[GATT]("salidas") || 2 ;
            $n.activation = $esteHijo[GATT]("activacion")||"relu" ;
            $.objeto.add( tf.layers.dense($n) ) ;
        }
        if( $esteHijo.tagName.toLowerCase() == "compilar" ) {
            var $n = {} ;
            $n.loss = $esteHijo[GATT]("perdida")||"categoricalCrossentropy";
            $n.optimizer = $esteHijo[GATT]("optimizador") || "adam";
            $n.metrics = ($esteHijo[GATT]("metricas")||"accuracy").split(",").map(x=>x.trim()) ;
            $.objeto.compile( $n ) ;
        }
    }
}

entrenar( $datos, $marcas ){
    var $this = this ;
    this
        .objeto
        .fit(
              tf.tensor1d($datos)
            , $marcas
            , {
                epochs: 5
                , batchSize: 32
            }
        )
        .then(
            function( $info ) {
                if( $this[HATT]("eventos") )
                window[$this[GATT]("eventos")]() ;
            }
        )
}
    };window.customElements.define( "red-neuronal", RedNeuronal );

;class ManosLibres extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
summary {
    background: black ; color: white ; padding: 5px ; cursor: pointer ;
}
div {
    border: 1px solid grey ;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
}
summary+section {
    padding: 10px ;
}
button {
    padding: 10px ;
    color: white ;
    border: none ;
}
button[comenzar] {
    padding: 10px ;
    background: green ;
    border-top-left-radius: 10px ;
    border-bottom-left-radius: 10px ;
}

button[detener] {
    background: red ;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
}</style>
<div >
    <details >
        <summary>Manos libres - Cara - <span>Handsfree no está instalado</span></summary>
        <section style="text-align:center">
            <button comenzar>Comenzar</button>
            <button detener>Detener</button>
        </section>
    </details>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    $.iniciable = false ;
    
    if(!window.Handsfree){
        console.log("Descargando");
        fnScript("https://gorosito.red/dame/handsfree.js",x=>{
            $$[PRIMER]("summary>span").innerHTML="Handsfree descargado";$.render()
        })
        fnLink("https://unpkg.com/handsfree@2.0.3/build/lib/assets/handsfree.css");
        $.iniciarHandsfree();
        return;
    }
    else {
        $.iniciarHandsfree();
    }
    
    $$[PRIMER]("button[comenzar]").onclick=z=>{$.iniciar()}
    $$[PRIMER]("button[detener]") .onclick =z=> $.detener() ;
    //$$.querySelector("button[regenerar]") .onclick = () => $.iniciarHandsfree() ;
    
}

async iniciarHandsfree() {
    var $=this,$$=$.shadowRoot;
    $.objeto=new Handsfree({debug: $[HATT]("debug")}) ;
    $.averiguando = setInterval(function() {
        try {
            $.objeto.start ;
            $.iniciable = true ;
            $$[PRIMER]("summary>span").innerHTML = "Ya podemos iniciar" ;
            clearInterval($.averiguando) ;
        }catch(e){}
    }, 1000);
}

iniciar() {
    var $=this,$$=$.shadowRoot;
    if( $.iniciable ) {
        $.objeto.start() ;
        $.iniciado = true ;
        $$[PRIMER]("summary>span").innerHTML = "Iniciando - Cargando modelo" ;
        setTimeout(s=>{$$[PRIMER]("summary>span").innerHTML = "Iniciado" ;},3000)
    }
}

detener() { var $=this,$$=$.shadowRoot;
    if(1){$.objeto.stop();$.iniciado=false;$$[PRIMER]("summary>span").innerHTML="Detenido"}
}
    };window.customElements.define( "manos-libres", ManosLibres );

;class ReconocerObjetos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
}

video, svg, canvas {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    transform: translate( -50% ) ${this[HATT]("espejo")||this[HATT]("invertido")?"scaleX(-1)":""}
}
svg {position:absolute;
}

circle, text {
    transition: 100ms all ;
    fill: rgba( 100,100,100, .2 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Detector de objetos - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <button detenercam disabled >Detener cámara</button>
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <canvas width="640" height="480"></canvas>
            <svg width="640" height="480" >
                <circle></circle>
                <circle></circle>
                <circle></circle>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $ = this, $$$=$.qs("span") ;
    if( !window.tf ) {
        $$$.innerHTML = "Cargando TensorFlow" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js",x=>$.render());
        return ;
    }
    if( !window.cocoSsd ) {
        $$$.innerHTML = "Cargando COCO-SSD" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd",x=>$.render())
        return ;
    }
    $$$.innerHTML = "Librerías cargadas, activando COCO-SSD" ;
    $.modelo = null ;
    setTimeout(function(){
        console.log("Cargar")
      cocoSsd
        .load()
        .then(
            function( coco ) {
                console.log("Coco")
                $.modelo = coco ;
                $$$.innerHTML = "COCO-SSD cargado <input type=checkbox disabled checked=checked>" ;
                $.qs("[activarcam]").onclick = function() {$.activarcam();}
                $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
            }
        )
      ;
    }, 100 );
    $.delay = parseInt( $[GATT]("delay") || $[GATT]("espera") || 200 ) ;
    $.eventos = $[GATT]("eventos") ;
    $.svg = $.qs("svg");
    $.canvas = $.qs("canvas");
}

activarcam() {
    var $=this;
    navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.qs("video").srcObject=n;
        $.qs("video").onloadeddata=function() {
            $.habilitar();
        }
        $.qs("[habilitar]").onclick = function() {
            $.predecir() ;
        }
        $.predecir() ;
    })
}

habilitar() {
    var $=this;
    $.qs("[detener]").onclick = function() {
        $.detener() ;
    };
    $.qs("[habilitar]").onclick = null ;
    $.predecir();
    var s=$.qs("svg");
    var c=getComputedStyle($.qs("video"));
    s.style.top = c.top ;
    s.style.left = c.left ;
}

predecir() {
    var $ = this;
    if( !$.modelo ) {
        return ;
    }
    $.modelo
        .detect( $.qs("video") )
        .then(
            function( dadasPredicciones ) {
                var $rects = $.qsa("circle") ;
                var $texts = $.qsa("text");
                for( var n = 0 ; n < Math.min( dadasPredicciones.length,3 ) ; n++ ) {
                    if( dadasPredicciones[n].score > 0.6 || 1 ) {
                        var $p = $.qs("[mensaje]");
                        var _clase = dadasPredicciones[n].class;
                        $p.innerText = 
                            _clase
                            + ' - con un ' 
                            + (parseInt(dadasPredicciones[n].score) * 100) 
                            + '% de seguridad.' 
                        ;
                        var [ x, y, width, height ] = dadasPredicciones[n].bbox ;
                        $rects[n][SATT]( "cx", x+width/2 ) ;
                        $rects[n][SATT]( "cy", y+height/2 ) ;
                        $rects[n][SATT]( "r", width/2 ) ;
                        $texts[n][SATT]( "x", x+width/2 ) ;
                        $texts[n][SATT]( "y", y+height/2 ) ;
                        $texts[n][CODIGO] = _clase;
                        if( $.eventos )
                            try {
                                if( !window[$.eventos] ) return console.error("No hay " + $.eventos);
                                var $bb = dadasPredicciones[n].bbox;
                                if( window[$.eventos] instanceof HTMLElement  ) {
                                    window[$.eventos].value = JSON.stringify( 
                                        {
                                            nombre: _clase
                                            , ini: {
                                                x: $bb[0]
                                                , y: $bb[1]
                                            }
                                            , fin: {
                                                x: $bb[2] 
                                                , y: $bb[3]
                                            }
                                            , cen: {
                                                x: ($bb[2]+$bb[0])/2
                                                , y: ($bb[3]+$bb[1])/2
                                            }
                                        }, null, 4
                                    )
                                }
                                if( window[$.eventos][_clase] ) {
                                    
                                    window[ $.eventos ][_clase](
                                        {
                                            ini: {
                                                x: $bb[0]
                                                ,y: $bb[1]
                                            }
                                            , fin: {
                                                x:$bb[2]
                                                ,y:$bb[3]
                                            }
                                            , cen: {
                                                x: ($bb[2]+$bb[0])/2
                                                , y: ($bb[3]+$bb[1])/2
                                            }
                                        }
                                        , _clase
                                        , dadasPredicciones
                                    );
                                }
                                else {
                                    window[$.eventos]( _clase, {
                                            ini: {
                                                x: $bb[0]
                                                ,y: $bb[1]
                                            }
                                            , fin: {
                                                x:$bb[2]
                                                ,y:$bb[3]
                                            }
                                            , cen: {
                                                x: ($bb[2]+$bb[0])/2
                                                , y: ($bb[3]+$bb[1])/2
                                            }
                                        } )
                                    ;
                                }
                            }catch(e){
                                if( $[HATT]("debug") )
                                console.error(e,_clase)
                            };
                    }
                }
                if( isNaN( $.delay ) ) $.ciclo = setTimeout( function(){$.predecir()},100 );
                else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
            }
        )
    ;

}

detener() {
    var $=this;
    if( isNaN($.delay) ) clearTimeout( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.qs("[habilitar]").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.qs("[habilitar]").style.background="green";
    $.qs("[detener]").onclick = null ;
    $.qs("[detener]").style.background="grey";
    $.qsa("circle").forEach(x=>x[SATT]("r",0));
}
    };window.customElements.define( "reconocer-objetos", ReconocerObjetos );

;class ReconocerPersona extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<details open >
    <summary> Reconocer persona - <span info></span> </summary>
    <div info1>
        
    </div>
    <main >
        <video autoplay width="640" height="480" ></video>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.ml5 ) {
        fnScript( "https://unpkg.com/ml5@latest/dist/ml5.min.js", ()=>$.render());
        return
    }
    if( !window.p5 ) {
        fnScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js",()=>$.render()); 
        return
    }
    
    window.setup = function() {
        createCanvas( 640, 480 ) ;
        $.video = createCapture( VIDEO ) ;
        $.video.size( 640, 480 ) ;
        $.video.hide() ;

        $.objeto = ml5.faceApi($.video, {withLandmarks: true, withDescriptors: true}, f=>$.detectar());
        $.clasificador = ml5.neuralNetwork({input: [ 64, 64, 4 ], task: "imageClassification", debug: true})
    };
    window.draw = function() {image( $.video, 0, 0 );$.dibujarCajas() ;}
}

detectar() {
    var $ = this, $$ = $.shadowRoot ;
    $.objeto.detect(
        $.video
        , function( $error, $aciertos ) {
            console.log( $aciertos ) ;
            if( $aciertos && $aciertos.length ) {
                $.recuadros = $.crearCuadros($aciertos) ;
            }
            setTimeout(function() {$.detectar() ;}, 100);
        }
    )
}

crearCuadros( $aciertos ) {
    return $aciertos.map($cadaAcierto=>{
        var rect = $cadaAcierto.alignedRect ;
        return({
              x: rect._box._x
            , y: rect._box._y
            , width:  rect._box._width
            , height: rect._box._height
            , label: ""
        })
    })
}

dibujarCajas() {
    if(!this.recuadros)return;
    this.recuadros.forEach(r=>{
        noFill () ;
        stroke(161, 95, 251) ;
        rect(r.x, r.y, r.width, r.height) ;
        
        textSize(21)
        textAlign(CENTER)
        text( r.label, r.x + (r.width / 2), r.y + r.height + 20)
    })
}
    };window.customElements.define( "reconocer-persona", ReconocerPersona );

;class ReconocerPose extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}
img {
    position:absolute;
}
video, svg {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    transform: translate(-50%);
}
div{
    text-align:center
}
svg {
    position:absolute;
}

circle, text,image {
    transition: 200ms all ;
    fill: rgba( 100,100,100, .5 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Reconocer fondo - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <!--button detenercam disabled >Detener cámara</button-->
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <svg width="640" height="480" >
                <circle nariz></circle>
                <circle ojoizq></circle>
                <circle ojoder></circle>
                <circle externon></circle>
                <circle ombligo></circle>
                <circle hombroizq></circle>
                <circle hombroder></circle>
                <circle></circle>
                <circle></circle>
                <image imagennariz></image>
                <image imagenojoizq></image>
                <image imagenojoder></image>
                <image imagenexternon></image>
                <image imagenombligo></image>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
            <img >
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
async render () {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.tf ) {
        $.qs("span").innerHTML = "Cargando TensorFlow" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js", z=>$.render()) ;
        return ;
    }
    if( !window.poseDetection ) {
        $.qs("span").innerHTML = "Cargando Detección de poses" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection",x=>$.render() );
        return ;
    }
    /*if( !window.SelfieSegmentation ) {
        $$[PRIMER]("span").innerHTML = "Cargando Selfie segmentation" ;
        var coco = document.createElement( "script" ) ;
            coco.src = "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation" ;
            coco.onload = function() {
                console.log("Cargado Selfie")
                $.render() ;
            };
        document.head.appendChild( coco ) ;
        console.log(coco)
        return ;
    }*/
    $.qs("span").innerHTML = "Librerías cargadas, activando MoveNet PoseDetection" ;
    setTimeout(
        async function() {
            await tf.ready();
            $.modelo = poseDetection.SupportedModels.MoveNet;
            $.detector = await poseDetection.createDetector($.modelo) ;
            $.delay = parseInt( $[GATT]("delay") || $[GATT]("espera") || 200 ) ;
            $.eventos = $[GATT]("eventos") ;
            $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
            $.qs("[activarcam]").onclick = function(){$.activarcam()}
            "nariz.ojoizq.ojoder.externon.ombligo.hombroizq.hombroder".split(".").forEach(function(n){
                $[n] = $.qs(`[${n}]`)
            });
            if( $[HATT]("imagen") ) {
                var i = $.qs("img");
                $.imagen = i ;
                i[SATT]("width", $[HATT]("ancho") || 100 );
                i[SATT]("height", $[HATT]("alto") || 100 );
                i[SATT]("src", $[GATT]("imagen") );
            }
            $.svg = $.qs("svg");
            console.log($.svg)
            try {
                window.fnReconocerPose($.svg) ;
            } catch(e){console.log(e)}
            if( $[HATT]("auto") ) $.qs("[activarcam]").click() ;
        
        }
        ,2000
    )
}

activarcam() {
    var $=this,$$=$.shadowRoot;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.qs("video").srcObject=n;
        $.qs("video").onloadeddata=function() {
            $.habilitar();
            $.qs("[habilitar]").onclick = function() {
            $.predecir() ;
        }
    }
        
    })
}

habilitar() {
    var $=this,$$=$.shadowRoot;
    $.el("detener").onclick = function() {$.detener()};
    $.el("detener").style.background="green";
    $.el("habilitar").onclick = null ;
    $.el("habilitar").style.background="grey";
    var s=$$.querySelector("svg");
    var c=getComputedStyle($.qs("video"));
    setTimeout(function(){
    s.style.top = c.top ;
    s.style.left = c.left ;
    },100)
    $.predecir();
    
}

async predecir() {
    var $ = this, $$ = this.shadowRoot ;
    if( !$.modelo ) {
        return ;
    }
    var predicciones = await $.detector.estimatePoses( $.qs("video") );
    var $rects = $.qsa("circle") ;
    if( predicciones.length ) {
        var pred = predicciones[0] ;
        try{
            window[$.eventos]({
                izq: {
                    ceja: pred.keypoints[1]
                    , ojo: pred.keypoints[3]
                    , hombro: pred.keypoints[5]
                    , codo: pred.keypoints[7]
                    , mano: pred.keypoints[9]
                    , cadera: pred.keypoints[11]
                    , rodilla: pred.keypoints[13]
                    , pie: pred.keypoints[15]
                }
                , der: {
                    ceja: pred.keypoints[2]
                    , ojo: pred.keypoints[4]
                    , hombro: pred.keypoints[6]
                    , codo: pred.keypoints[8]
                    , mano: pred.keypoints[10]
                    , cadera: pred.keypoints[12]
                    , rodilla: pred.keypoints[14]
                    , pie: pred.keypoints[16]
                    
                }
            },predicciones)
        } catch(e){}
        $rects[0][SATT]("cx",pred.keypoints[0].x);
        $rects[0][SATT]("cy",pred.keypoints[0].y);
        $rects[0][SATT]("r",5);

        $rects[1][SATT]("cx",pred.keypoints[1].x);
        $rects[1][SATT]("cy",pred.keypoints[1].y);
        $rects[1][SATT]("r",5);

        $rects[2][SATT]("cx",pred.keypoints[2].x);
        $rects[2][SATT]("cy",pred.keypoints[2].y);
        $rects[2][SATT]("r",5);

        $rects[3][SATT]("cx",(pred.keypoints[5].x+pred.keypoints[6].x)/2);
        $rects[3][SATT]("cy",(pred.keypoints[5].y+pred.keypoints[6].y)/2);
        $rects[3][SATT]("r",5);
        $rects[4][SATT]("cx",(pred.keypoints[11].x+pred.keypoints[12].x)/2);
        $rects[4][SATT]("cy",(pred.keypoints[11].y+pred.keypoints[12].y)/2);
        $rects[4][SATT]("r",5);
        
        $rects[5][SATT]("cx", pred.keypoints[5].x)
        $rects[5][SATT]("cy", pred.keypoints[5].y)
        $rects[6][SATT]("cx", pred.keypoints[6].x)
        $rects[6][SATT]("cy", pred.keypoints[6].y)
        $rects[5][SATT]("r",5)
        $rects[6][SATT]("r",5)
    }
    if( isNaN( $.delay ) ) $.ciclo = setTimeout( function(){$.predecir()}, 100 );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}
detener() {
    var $=this,$$=$.shadowRoot;
    if( isNaN($.delay) ) clearTimeout( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.el("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.el("detener").onclick = null ;
    $.el("detener").style.background="grey";
    $.el("habilitar").style.background="green";
   var c = Array.from($.qsa("circle"));
    c.forEach(x=>x[SATT]("r",0));
}
el(n){return this.qs("["+n+"]")}
els(n){return this.qsa("["+n+"]")}

ubicar($nombre) {
    return this.qs("svg").qs("["+$nombre+"]")
}
    };window.customElements.define( "reconocer-pose", ReconocerPose );

;class ReconocerManos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}

video, svg, canvas {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    box-shadow: 5px 5px 5px black;
    transform: translate(-50%)
    ${
        this[HATT]("invertido") || this[HATT]("espejo") ? `scaleX(-1)` : ""
    }
}
div{
    text-align:center
}
svg, canvas {
    position:absolute;
}

${ $summary } ${$main}</style>
<details open >
    <summary>
        Reconocer manos - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <button detenercam disabled >Detener cámara</button>
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>            <canvas width="640" height="480"></canvas>

            <svg width="640" height="480" >
                <circle fill="hsla(300,90%,50%,0.6)" ></circle>
                <circle fill="hsla(200,90%,50%,0.6)"></circle>
                <circle fill="hsla(100,90%,50%,0.6)"></circle>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
async render () {
    var $ = this;
    if( !window.tf ) {
        $.qs("span").innerHTML = "Cargando TensorFlow" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js",x=>$.render());
        return;
    }
    if( !window.handPoseDetection ) {
        $.qs("span").innerHTML = "Cargando MediaPipe Hands" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/hand-pose-detection",x=>$.render());
        return;
    }
    if( !window.Hands ) {
        $.qs("span").innerHTML = "Cargando MediaPipe Hands II" ;
        fnScript("https://cdn.jsdelivr.net/npm/@mediapipe/hands",x=>$.render());
        return;
    }
    $.qs("span").innerHTML = "Librerías cargadas, activando MediaPipe Hands" ;
    $.modelo = handPoseDetection.SupportedModels.MediaPipeHands ;
    $.svg = $.qs("svg") ;
    $.video = $.qs("video") ;
    $.canvas = $.qs("canvas");
    $.detector = await handPoseDetection.createDetector(
        $.modelo
        , {
            runtime: "mediapipe"
            , solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands"
            , modelType: "lite"
        }
    );
    if( $[HATT]("listo") && window[$[GATT]("listo")] ) {
        window[$[GATT]("listo")]() ;
    }
    $.delay = parseInt( $.getAttribute("delay") || $.getAttribute("espera") || 200 ) ;
    $.izq = $[GATT]("izq") || $[GATT]("izquierda") ;
    $.der = $[GATT]("der") || $[GATT]("derecha") ;
    $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
    $.qs("[activarcam]").onclick = function(){$.activarcam()}
}

activarcam() {
    var $=this,$$=$.shadowRoot;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.qs("video").srcObject=n;
        $.qs("video").onloadeddata=function() {
            $.habilitar();
            $.qs("[habilitar]").onclick = function() {
            $.predecir() ;
        }
    }
        
    })
}

habilitar() {
    var $=this,$$=$.shadowRoot;
    $.qs("[detener]").onclick = function() {$.detener()};
    $.qs("[detener]").style.background="green";
    $.qs("[habilitar]").onclick = null ;
    $.qs("[habilitar]").style.background="grey";
    var s=$.qs("svg");
    var c=getComputedStyle($.qs("video"));
    setTimeout(function(){
    s.style.top = c.top ;
    s.style.left = c.left ;
    },100)
    $.predecir();
    
}

async predecir() {
    var $ = this, $$ = this.shadowRoot ;
    if( !$.modelo ) {
        return ;
    }
    var predicciones = await $.detector.estimateHands( $.video );
    for( var n = 0 ; n < Math.min(predicciones.length,3);n++ ) {
        //console.log( predicciones )
        if( predicciones[n].handedness == "Right" ) try{window[$.izq]&&window[$.izq ](predicciones[n], n)}catch(e){console.error(e)};
        if( predicciones[n].handedness == "Left" ) try{window[$.der]&&window[$.der ](predicciones[n], n)}catch(e){console.error(e)};
        
        var $rects = $.qsa("circle") ;
        var cadaMano = predicciones[n] ;
        $rects[n].setAttribute( "cx", cadaMano.keypoints[0].x ) ;
        $rects[n].setAttribute( "cy", cadaMano.keypoints[0].y ) ;
        $rects[n].setAttribute( "r", 30 ) ;
        
    }
    if( isNaN( $.delay ) ) $.ciclo = requestAnimationFrame( function(){$.predecir()} );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}
detener() {
    var $=this,$$=$.shadowRoot;
    if( isNaN($.delay) ) cancelAnimationFrame( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.qs("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.qs("detener").onclick = null ;
    $.qs("detener").style.background="grey";
    $.qs("habilitar").style.background="green";
   var c = Array.from($$.querySelectorAll("circle"));
    c.forEach(x=>x[SATT]("r",0));
}


    };window.customElements.define( "reconocer-manos", ReconocerManos );

;class TeachableMachine extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}
img {
    position:absolute;
}
video, svg {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    transform: translate(-50%);
}
div{
    text-align:center
}
svg {
    position:absolute;
}

circle, text,image {
    transition: 200ms all ;
    fill: rgba( 100,100,100, .5 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Teachable Machine - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <!--button detenercam disabled >Detener cámara</button-->
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <svg width="640" height="480" >
                <circle nariz></circle>
                <circle ojoizq></circle>
                <circle ojoder></circle>
                <circle externon></circle>
                <circle ombligo></circle>
                <circle hombroizq></circle>
                <circle hombroder></circle>
                <circle></circle>
                <circle></circle>
                <image imagennariz></image>
                <image imagenojoizq></image>
                <image imagenojoder></image>
                <image imagenexternon></image>
                <image imagenombligo></image>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
            <img >
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
// &&&&&&&&&&&&&&&&&&&&&&&&&&

async render() {var $=this;
    if( !window.tf ) {
        $.span("Cargando TensorFlow");
        return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js",x=>$.render());
    }
    if( !window.tmImage ) {
        $.qs("span").innerHTML = "Cargando Teachable Machine";
        return fnScript("https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js", x=>$.render())
    }
    $.span("Base cargada. Activando.");
    $.umbral = ($[GATT]("umbral") || 70)/100 ;
    
    var url = $[GATT]("url") ;
    $.objeto = await tmImage.load(
        url + "model.json"
        , url + "metadata.json"
    );
    var maxClases = $.objeto.getTotalClasses() ;
    $.qsa("[activarcam],[detenercam],[habilitar],[detener]")
        .forEach(x=>x.removeAttribute("disabled"));
    $.span("Habilitado")
    $.qs("[activarcam]")
        .onclick = function(){$.activarcam()}
    $.video = $.qs("video");
    $.eventos = $[GATT]("eventos");
    if( $[HATT]("auto") ) $.activarcam() ;
}

activarcam() {
    var $=this;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[activarcam]").setHTML("Desactivar cámara");
        $.qs("[activarcam]").onclick = function() {
            $.qs("[activarcam]").setHTML("Activar cámara");
            $.activarcam() ;
        }
        $.qs("[habilitar]").style.background = "green" ;
        $.video.srcObject=n;
        $.video.onloadeddata=function() {
            $.habilitar();
            $.qs("[habilitar]").onclick = function() {
                console.log( "Comienza a predecir" ) ;
                $.predecir() ;
            }
        }
        
})
}

habilitar() {
    var $=this,$$=$.shadowRoot;
    $.el("detener").onclick = function() {$.detener()};
    $.el("detener").style.background="green";
    $.el("habilitar").onclick = null ;
    $.el("habilitar").style.background="grey";
    var c=getComputedStyle($.qs("video"));
    
    $.predecir();
    
}

async predecir() {
    var $ = this, $$ = this.shadowRoot ;
    if( !$.objeto ) {
        console.log( "Modelo todavía no cargado" )
        return ;
    }
    var $pred = await $.objeto.predict( $.video ) ;
    //console.log( $pred )
    if( window[ $.eventos ] ) {
        if( typeof $.eventos == "function" ) window[ $.eventos ]( $pred ) ;
        else {
            $pred.forEach(function($ev){
                if( window[$.eventos][$ev.className] && $ev.probability > $.umbral )
                window[$.eventos][ $ev.className ]( $ev.probability, $ev.className ) ;
            })
        }
    }
    
    else if( window[ $.eventos ] ) window[$.eventos]
    if( isNaN( $.delay ) ) $.ciclo = setTimeout( function(){$.predecir()}, 100 );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}


detener() {
    var $=this,$$=$.shadowRoot;
    if( isNaN($.delay) ) clearTimeout( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.el("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.el("detener").onclick = null ;
    $.el("detener").style.background="grey";
    $.el("habilitar").style.background="green";
   var c = Array.from($.qsa("circle"));
    c.forEach(x=>x[SATT]("r",0));
}
el(n){return this.qs("["+n+"]")}
els(n){return this.qsa("["+n+"]")}

ubicar($nombre) {
    return this.qs("svg").qs("["+$nombre+"]")
}
span($){
    this.qs("span").setHTML($)
} 
    };window.customElements.define( "teachable-machine", TeachableMachine );

;class ReconocerCaras extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}
video{background:rgba(0,0,0,.7)}
video, svg,canvas {
    position: absolute ;
    top: 0 ;
    left: 50% ;
    transform: translate(-50%) ${this[HATT]("espejo")||this[HATT]("invertido")?"scaleX(-1)":""}
}
div{
text-align:center}
svg {position:absolute;
}

circle, text {
    transition: 100ms all ;
    fill: rgba( 100,100,100, .2 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Reconocer caras - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <button detenercam disabled >Detener cámara</button>
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <canvas width="640" height="480" ></canvas>
            <svg width="640" height="480" >
                <circle></circle>
                <circle></circle>
                <circle></circle>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
                <text dominant-baseline=middle text-anchor=middle></text>
            </svg>
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
async render () {
    var $ = this,$$$=$.qs("span") ;
    if( !window.tf ) {
        $$$[CODIGO] = "Cargando TensorFlow" ;
        fnScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js",X=>$.render());
        return
    }
    if( !window.blazeface ) {
        $$$[CODIGO] = "Cargando Blaze Face" ;
        return fnScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface",x=>$.render());
    }
    $$$[CODIGO] = "Librerías cargadas, activando BlazeFace" ;
    if( window.blazeface ) {
        $.modelo = await blazeface.load();
    }
    else {
        $.modelo = await faceLandmarksDetection.createDetector(
            faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh
            //, {
                //runtime: 'mediapipe'
                //, solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
            //}
        );
    }
    $.delay = parseInt( $[GATT]("delay") || $[GATT]("espera") || 200 ) ;
    $.video = $.qs("video");
    $.svg = $.qs("svg") ;
    $.canvas = $.qs("canvas");
    $.eventos = $[GATT]("eventos") ;
    $.qsa("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
    $.qs("[activarcam]").onclick = function(){$.activarcam()}
}

activarcam() {
    var $=this;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $.qs("[habilitar]").style.background = "green" ;
        $.video.srcObject=n;
        $.video.onloadeddata=function() {
            $.habilitar();
            $.qs("[habilitar]").onclick = function() {
            $.predecir() ;
        }
    }
        
    })
}

habilitar() {
    var $=this;
    $.el("detener").onclick = function() {$.detener()};
    $.el("detener").style.background="green";
    $.el("habilitar").onclick = null ;
    $.el("habilitar").style.background="grey";
    var s=$.svg;
    var c=getComputedStyle($.video);
    setTimeout(function(){
    s.style.top = c.top ;
    s.style.left = c.left ;
    },100)
    $.predecir();
    
}

async predecir() {
    var $ = this;
    if( !$.modelo ) {
        return ;
    }
    var predicciones = await $.modelo.estimateFaces($.video, false);
    for( var n = 0 ; n < Math.min(predicciones.length,3);n++ ) {
        var $rects = $.qsa("circle") ;
        var $p = $.qs("[mensaje]");
        var cadaPersona = predicciones[n] ;
        const [x, y] = cadaPersona.topLeft ;
        const [d, z] = cadaPersona.bottomRight ;
        var width = d-x;
        var height = z-y ;
        $rects[n][SATT]( "cx", x+width/2 ) ;
        $rects[n][SATT]( "cy", y+height/2 ) ;
        $rects[n][SATT]( "r", Math.min(width,height)/2 ) ;
        if( $.eventos )try {
            var lm = cadaPersona.landmarks ;
            window[ $.eventos ](
                {
                    izq: {
                        ojo: lm[1]
                        , oreja: lm[4]
                    }
                    , der: {
                        ojo: lm[0]
                        , oreja: lm[5]
                    }
                    , nariz: lm[2]
                    , boca: lm[3]
                    , recuadro: {
                        x, y, ancho: width, alto: height
                    }
                }
                , lm[1][1] - lm[0][1]
                , lm[1][0] - lm[0][0]
        );}catch(e){console.error(e)};
        if( isNaN( $.delay ) ) $.ciclo = requestAnimationFrame( function(){$.predecir()} );
        else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
        
    }
}
detener() {
    var $=this;
    if( isNaN($.delay) ) cancelAnimationFrame( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.el("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.el("detener").onclick = null ;
    $.el("detener").style.background="grey";
    $.el("habilitar").style.background="green";
    $.qsa("circle").forEach(x=>x[SATT]("r",0));
}
el(n){return this.qs("["+n+"]")}
els(n){return this.qsa("["+n+"]")}
    };window.customElements.define( "reconocer-caras", ReconocerCaras );

;class ReconocerFondo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
main {position:relative;}
section {
    position: relative ;
    min-height: 480px ;
    text-align:left;
}

video, canvas{
    position: relative ;
    top: 0 ;
    left: 0 ;
}

div{
text-align:center}
svg {position:absolute;
}

circle, text {
    transition: 200ms all ;
    fill: rgba( 100,100,100, .5 ) ;
}
${ $summary } ${$main}</style>
<details open >
    <summary>
        Reconocer fondo - <span>Iniciando</span>
    </summary>
    <main>
        <div>
            <button activarcam disabled >Activar cámara</button>
            <!--button detenercam disabled >Detener cámara</button-->
            <button habilitar  disabled >Activar reconocimiento</button>
            <button detener    disabled >Detener reconocimiento</button>
            <p mensaje ></p>
        </div>
        <section >
            <video autoplay muted width="640" height="480" ></video>
            <canvas width="640" height="480" >
            </canvas>
        </section>
    </main>
</details>            `;
            if( this.render ) this.render() ; 
        }
async render () {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.tf ) {
        $$[PRIMER]("span").innerHTML = "Cargando TensorFlow" ;
        var tf = document.createElement("script") ;
            tf.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js" ;
            tf.onload = function() {
                $.render() ;
            };
        document.head.appendChild( tf ) ;
        return ;
    }
    if( !window.bodyPix ) {
        $$[PRIMER]("span").innerHTML = "Cargando Detección de figuras" ;
        var coco = document.createElement( "script" ) ;
            coco.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0" ;
            coco.onload = function() {
                console.log("Cargado body pix")
                $.render() ;
            };
        document.head.appendChild( coco ) ;
        console.log(coco)
        return ;
    }
    /*if( !window.SelfieSegmentation ) {
        $$[PRIMER]("span").innerHTML = "Cargando Selfie segmentation" ;
        var coco = document.createElement( "script" ) ;
            coco.src = "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation" ;
            coco.onload = function() {
                console.log("Cargado Selfie")
                $.render() ;
            };
        document.head.appendChild( coco ) ;
        console.log(coco)
        return ;
    }*/
    $$[PRIMER]("span").innerHTML = "Librerías cargadas, activando BodyPix" ;
    $.modelo = await bodyPix.load({
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
    });
  
    //$.detector = await poseDetection.createDetector($.modelo) ;
    $.delay = parseInt( $.getAttribute("delay") || $.getAttribute("espera") || 200 ) ;
    $.eventos = $[GATT]("eventos") ;
    $$[CADA]("[activarcam],[detenercam],[habilitar],[detener]").forEach(x=>x.removeAttribute("disabled"));
    $$[PRIMER]("[activarcam]").onclick = function(){$.activarcam()}
    "nariz.ojoizq.ojoder.externon.ombligo".split(".").forEach(function(n){
        $[n] = $$[PRIMER](`[${n}]`)
    })
}

activarcam() {
    var $=this,$$=$.shadowRoot;
    navigator.mediaDevices.getUserMedia({video:true}).then(function(n){
        $$[PRIMER]("[habilitar]").style.background = "green" ;
        $$[PRIMER]("video").srcObject=n;
        $$[PRIMER]("video").onloadeddata=function() {
            $.habilitar();
            $$[PRIMER]("[habilitar]").onclick = function() {
            $.predecir() ;
        }
    }
        
    })
}

habilitar() {
    var $=this,$$=$.shadowRoot;
    $.el("detener").onclick = function() {$.detener()};
    $.el("detener").style.background="green";
    $.el("habilitar").onclick = null ;
    $.el("habilitar").style.background="grey";
    var s=$$[PRIMER]("svg");
    var c=getComputedStyle($$[PRIMER]("video"));
    //setTimeout(function(){
    //s.style.top = c.top ;
    //s.style.left = c.left ;
    //},100)
    $.predecir();
    
}


async predecir() {
  const canvas = this.shadowRoot.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  console.log( "Prediciendo" );
  
  ctx.drawImage( this.shadowRoot.querySelector("video"), 0,0 );
  
  // Loading the model
  const net = this.modelo;
  // Segmentation
  const { data:$mapaDeBits } = await net.segmentPerson(canvas, {
    internalResolution: 'medium',
  });

  
  // Extracting image data
  const { data:imgData } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // Creating new image data
  const newImg = ctx.createImageData(canvas.width, canvas.height);
  const newImgData = newImg.data;
  
  for(let i=0; i<$mapaDeBits.length; i++) {
    const [r, g, b, a] = [imgData[i*4], imgData[i*4+1], imgData[i*4+2], imgData[i*4+3]];

    const gray = ((0.3 * r) + (0.59 * g) + (0.11 * b));
    [
      newImgData[i*4],
      newImgData[i*4+1],
      newImgData[i*4+2],
      newImgData[i*4+3]
    ] = !$mapaDeBits[i] ? [grey, grey, 0, 255] : [r, g, b, a];
  }
  
  
  // Draw the new image back to canvas
  ctx.putImageData(newImg, 0, 0);
  var $ = this;
    if( isNaN( $.delay ) ) $.ciclo = requestAnimationFrame( function(){$.predecir()} );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}

async predecir__() {
    var $ = this, $$ = this.shadowRoot ;
    if( !$.modelo ) {
        return ;
    }
    var predicciones = await $.detector.estimatePoses( $$[PRIMER]("video") );
    var $rects = $$.querySelectorAll("circle") ;
    if( predicciones.length ) {
        var pred = predicciones[0] ;
        try{
            window[$.eventos](pred,predicciones)
        } catch(e){}
        $rects[0][SATT]("cx",pred.keypoints[0].x);
        $rects[0][SATT]("cy",pred.keypoints[0].y);
        $rects[0][SATT]("r",5);

        $rects[1][SATT]("cx",pred.keypoints[1].x);
        $rects[1][SATT]("cy",pred.keypoints[1].y);
        $rects[1][SATT]("r",5);

        $rects[2][SATT]("cx",pred.keypoints[2].x);
        $rects[2][SATT]("cy",pred.keypoints[2].y);
        $rects[2][SATT]("r",5);

        $rects[3][SATT]("cx",(pred.keypoints[5].x+pred.keypoints[6].x)/2);
        $rects[3][SATT]("cy",(pred.keypoints[5].y+pred.keypoints[6].y)/2);
        $rects[3][SATT]("r",5);
        $rects[4][SATT]("cx",(pred.keypoints[11].x+pred.keypoints[12].x)/2);
        $rects[4][SATT]("cy",(pred.keypoints[11].y+pred.keypoints[12].y)/2);
        $rects[4][SATT]("r",5);
    }
    if( isNaN( $.delay ) ) $.ciclo = requestAnimationFrame( function(){$.predecir()} );
    else $.ciclo = setTimeout( function(){$.predecir();}, $.delay );
}
detener() {
    var $=this,$$=$.shadowRoot;
    if( isNaN($.delay) ) cancelAnimationFrame( $.ciclo ) ;
    else clearTimeout( $.ciclo ) ;
    $.el("habilitar").onclick = function() {$.predecir() ;this.style.background = "grey";};
    $.el("detener").onclick = null ;
    $.el("detener").style.background="grey";
    $.el("habilitar").style.background="green";
   var c = Array.from($$.querySelectorAll("circle"));
    c.forEach(x=>x[SATT]("r",0));
}
el(n){return this.shadowRoot[PRIMER]("["+n+"]")}
els(n){return this.shadowRoot[CADA]("["+n+"]")}
    };window.customElements.define( "reconocer-fondo", ReconocerFondo );

;class EsVentana extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div>
    <slot />
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this;
    if( !window.WinBox ) {
        fnScript("https://nextapps-de.github.io/winbox/dist/js/winbox.min.js",x=>$.render())
        return fnLink("https://nextapps-de.github.io/winbox/dist/css/winbox.min.css");
    }
    Array.from($.children).forEach(function(x){
        x.onclick = function() {
            this.objeto = new WinBox(this.innerHTML,JSON.parse(this[GATT]("data")));
        }
    })
}

click() {
    this.children[0].click()
}
    };window.customElements.define( "es-ventana", EsVentana );

;class EsVanta extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
#idFondoVanta {
    display: block ;
    position: fixed ;
    top: 0 ; left: 0 ;
    width: 100% ; height: 100vh ;
    z-index: -2 ;
}</style>
<div id="idFondoVanta">
    
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this;
    $.cargado = Number(!!window.THREE) + Number(!!window.VANTA) ;
    $.tipo__ = (this[GATT]( "tipo" ) || "net" ).toUpperCase() ;
    if( !window.THREE ) {
        fnScript(`https://gorosito.red/dame/3d/three.js`,x=>$.render());
        return ;
    }
    if( !window.VANTA ) {
        fnScript(`https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.${$.tipo__.toLowerCase()}.min.js`,x=>$.render());
        return ;
    }
    VANTA[this.tipo__]({
        el: $.qid("idFondoVanta")
        , mouseControls: true
        , touchControls: true
        , gyroControls: false
        , minHeight: 200.00
        , minWidth: 200.00
        , scale: 1.00
        , scaleMobile: 1.00
        , color: $[GATT]("color")||0x426998
        , backgroundColor: ($[GATT]("fondo")) || 0x8162a
    })
}


    };window.customElements.define( "es-vanta", EsVanta );

;class MavoApp extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
#mavo {
    border: 1px dotted grey ;
    border-radius: 10px ;
}</style>
<div id="mavo" mv-app mv-storage="local" mv-autosave="0" >
    <slot />
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {var $=this;
    if( typeof Mavo == "undefined" ) {
        fnScript("https://get.mavo.io/stable/mavo.js",x=>$.render());
        fnLink("https://get.mavo.io/stable/mavo.css");
        return ;
    }
    [...$.children].forEach((x,o)=>{
        x.setAttribute("mv-storage", "local") ;
        x.setAttribute("mv-autosave", "0");
        x.setAttribute("mv-app", "app"+$.id+o );
        x.setAttribute("mv-expressions", "{{ }}");
    });
}
    };window.customElements.define( "mavo-app", MavoApp );

;class WinAmp extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div id="idWinamp"></div>            `;
            if( this.render ) this.render() ; 
        }
render() { var $=this;
    if( !window.Webamp ) {
        return fnScript("https://unpkg.com/webamp@1.4.2/built/webamp.bundle.min.js", x=>$.render());
    }
    $.objeto = new Webamp({
        initialTracks: []
        , 
    });
    $.objeto.renderWhenReady( $.qs("#idWinamp") );
}
    };window.customElements.define( "win-amp", WinAmp );

;class MetaIsotope extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div id="iso"><slot/></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this;
    if(!window.Isotope){
        fnScript("https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js",x=>{$.render()})
        return;
    }
    $.objeto=new Isotope($.qid("iso"),{itemSelector:"article",layoutMode:"fitRows"})
}

filtrar($selectorCSS){
    console.log("Filtrar con ", $selectorCSS)
    this.objeto.arrange({filter:$selectorCSS});
}

ordenar($fn) {
    console.log( "Ordenar con ", $fn )
    this.objeto.arrange({sortBy:$fn});
}
    };window.customElements.define( "meta-isotope", MetaIsotope );

;class EsRueda extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
#piemenu > svg { width: 100%; height: 100%; }
#piemenu { height: 400px; width: 400px; margin:auto; }
@media (max-width: 400px) { #piemenu { height: 300px; width: 300px; } }

[class|=wheelnav-piemenu-slice-basic] { fill: #497F4C; stroke: none; }
[class|=wheelnav-piemenu-slice-selected] { fill: #497F4C; stroke: none; }
[class|=wheelnav-piemenu-slice-hover] { fill: #497F4C;  stroke: none; fill-opacity: 0.77; cursor: pointer; }

[class|=wheelnav-piemenu-title-basic] { fill: #333; stroke: none; }
[class|=wheelnav-piemenu-title-selected] { fill: #fff; stroke: none; }
[class|=wheelnav-piemenu-title-hover] { fill: #222; stroke: none; cursor: pointer; }

.wheelnav-piemenu-spreader-in,
.wheelnav-piemenu-spreader-out { fill: #444; stroke: #444; stroke-width: 2; cursor: pointer; }
.wheelnav-piemenu-spreadertitle-in,
.wheelnav-piemenu-spreadertitle-out { fill: #eee; stroke: #444; cursor: pointer; }

.wheelnav-piemenu-marker { stroke: #444; stroke-width: 2; }</style>
<div id='piemenu' data-wheelnav
 data-wheelnav-slicepath='DonutSlice'
 data-wheelnav-spreader data-wheelnav-spreaderpath='PieSpreader'
 data-wheelnav-marker data-wheelnav-markerpath='PieLineMarker'
 data-wheelnav-navangle='270'
 data-wheelnav-titleheight='45'
 data-wheelnav-cssmode 
 data-wheelnav-init>
  <div data-wheelnav-navitemicon='check' onmouseup='alert("Place your logic here.");'></div>
  <div data-wheelnav-navitemimg='http://pmg.softwaretailoring.net/img/pmg_favicon.png' onmouseup='alert("Place your logic here.");'></div>
  <div data-wheelnav-navitemicon='checkbox' onmouseup='alert("Place your logic here.");'></div>
  <div data-wheelnav-navitemicon='checked' onmouseup='alert("Place your logic here.");'></div>
  <div data-wheelnav-navitemicon='star' onmouseup='alert("Place your logic here.");'></div>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.Raphael ) {
        fnScript("https://pmg.softwaretailoring.net/js/raphael.min.js", x=>$.render());
        fnScript("https://pmg.softwaretailoring.net/js/raphael.icons.min.js");
        return
    }
    if( !window.wheelnav ) {
        fnScript("https://gorosito.red/dame/wheelnav.js", x => $.render());return
    }
    $.objeto = new wheelnav($.qs("div"));
        var piemenu = $.objeto ;
        piemenu.spreaderInTitle = icon.plus;
        piemenu.spreaderOutTitle = icon.cross;
        piemenu.spreaderRadius = piemenu.wheelRadius * 0.34;
        piemenu.sliceInitPathFunction = piemenu.slicePathFunction;
        piemenu.initPercent = 0.1;
        piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
        piemenu.createWheel();
        piemenu.setTooltips(['check','image','checkbox','checked','star']);        
}


    };window.customElements.define( "es-rueda", EsRueda );

;class EsMedidor extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div id="idGauge"></div>            `;
            if( this.render ) this.render() ; 
        }
render() {var $=this;
    if( !window.d3 ) {
        fnScript("https://d3js.org/d3.v7.min.js", x => $.render() );
        return ;
    }
    if( !window.c3 ) {
        fnScript( "https://unpkg.com/c3@0.7.20/c3.js", x=>$.render() );
        fnLink("https://unpkg.com/c3@0.7.20/c3.css")
        return ;
    }
    $.objeto=c3.generate({
        bindto: $.qid("idGauge")
        ,data:{
            columns: [
                ["valor", 90.00]
            ]
            , type: "gauge"
        }
        , gauge: {
            min: $[GATT]("min")||0, max: $[GATT]("max")||100, units: $[GATT]("unidad")||"%",width:$[GATT]("grosor")||30
        }
        , size: {
            height: 200
        }
    })
}
actualizar($valor){
    var $=this;
    $.objeto.load({columns:[["valor",$valor]]})
}
    };window.customElements.define( "es-medidor", EsMedidor );

;class EsGrafo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
#idGrafo{position:absolute;top:0;left:0;width:100%;height:90vh}
${
    this[GATT]("altura")||this[GATT]("alto")||"90vh"
}
node{
    background:red;
}</style>
<div id="idGrafo"></div>            `;
            if( this.render ) this.render() ; 
        }
render() {var $=this;
    if( !window.cytoscape ) {
        fnScript("https://unpkg.com/cytoscape/dist/cytoscape.min.js",x=>$.render());
        
        return
    }
    if( !window.cytoscapeCxtmenu ) {
        fnScript("https://gorosito.red/dame/cxtmenu.js",x=>$.render());
        return;
    }
    $.objeto=cytoscape({
        container:$.qid("idGrafo")
        , ready:$.listo
        , style:[
            {
				selector: 'node',
				css: {'content': 'data(name)'}
			},

			{
				selector: 'edge',
				css: {'curve-style': 'bezier','target-arrow-shape': 'triangle'}
			}
        ]
        , elements: {
            nodes: $.querySelector("nodos").innerHTML.trim().split("\n").map(x=>x.trim()).filter(z=>z.length>0).map(x=>{
                data: JSON.parse(x)
            })
            , edges: $.querySelector("uniones").innerHTML.trim().split("\n").map(x=>x.trim()).filter(z=>z.length>0).map(x=>{
                data: JSON.parse(x)
            })
        }
    });
    $.objeto.cxtmenu({
        selector: "node,edge"
        , commands: $.querySelector("menu").innerHTML.trim().split("\n").map(x=>x.trim()).filter(z=>z.length>0).map(x=>{
            x = x.split("|") ;
            return  {
                content: x[0]
                , select: window[x[1]]
            }
        })
    })
}


listo() {
    console.log("listo")
}
    };window.customElements.define( "es-grafo", EsGrafo );

;class MenuRadial extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
${DETAILS}</style>
<details >
    <summary>Menú radial</summary>
</details>            `;
            if( this.render ) this.render() ; 
        }
render() {var $=this;
    if( typeof RadialMenu == "undefined" ) {
        fnScript("https://gorosito.red/dame/menuradial.js", x=>{$.render()});
        return;
        
    }
    $.objeto = new RadialMenu({
        buttons: $.innerHTML.trim().split("\n").filter(x=>x.trim()).map(x=>{
            var o = x.split("|") ;
            return {
                text: o[0]
                , action: function() {
                    window[o[1]]();
                }
                
            }
        })
        , hoverBackgroundColor: $[GATT]("fondo")||"darkgrey"
        , hoverTextColor: $[GATT]("letra")||"black"
    })
    if( $[HATT]("objetivo") ) {
        if( $[GATT]("objetivo") == "window" )
         window.oncontextmenu = function($mouse) {
             $.objeto.show($mouse.clientX, $mouse.clientY)
         }
    }
}

mostrar(x,y) {
    if(arguments.length)
        this.objeto.setPos(x,y);
    this.objeto.show()
}

ocultar() {
    this.objeto.hide()
}
    };window.customElements.define( "menu-radial", MenuRadial );

;class ParaArrastrar extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}
.gu-hide {
  display: none !important;
}
.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.gu-transit {
  opacity: 0.2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
  filter: alpha(opacity=20);
}
${
    this[HATT]("tabla") ?
    `slot { display: table; width: 100% }` :
    ""
    
}

div {
    height: auto ;
}</style>
<style>
    div {
        min-height: 300px ;
        display: table ; 
        width: 100% ;
    }
</style>
<div >
    <slot ></slot>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if( !window.dragula ) {
        fnScript("https://gorosito.red/dame/dragula.js", x=>{
            $.render()
        })
        fnLink("https://gorosito.red/dame/draggula.css") ;
        return ;
    }
    var $st = {
        copy: function($item, $contenedorOrigen) {
            return $contenedorOrigen[HATT]("duplicable");
        }
        , accepts: function( $item, $contenedorDestino, $contenedorOrigen, $siguiente ){
            if( $contenedorDestino[HATT]("no-acepta") ) return false ;
            if( window[ $[GATT]("acepta") ] ) return window[ $[GATT]("acepta") ]($item,$contenedorDestino,$contenedorOrigen,$siguiente) ;
            return true ;
        }
        , moves: function( $item, $contenedorOrigen,$item2,$siguiente ) {
            if( $contenedorOrigen[HATT]("solo-recibe") ) return true ;
            if( window[ $[GATT]("muevesi") ] ) return window[ $[GATT]("muevesi") ]($item, $contenedorOrigen,$siguiente);
            return true ;
        }
    };
    $.objeto = dragula(Array.from( $.children ), $st);
    if( $[HATT]("eventos") ) {
        var $fn = window[ $[GATT]("eventos") ] ;
        if( typeof $fn == "function" ) {
            $.objeto.on("drop", $fn)
        }
    }
}
    };window.customElements.define( "para-arrastrar", ParaArrastrar );

;class ParaZoom extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<slot ></slot>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $ = this ;
    if( !window.Zooming ) {
        fnScript( "https://unpkg.com/zooming/build/zooming.min.js", x=>$.render() );
        return ;
    }
    $.objeto = new Zooming({}).listen( "img" ) ;
}
    };window.customElements.define( "para-zoom", ParaZoom );

;class TieneZoom extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<slot />            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot;
    if( !window.zoom ) {
        var $script = document.createElement( "script" ) ;
        $script.src = "https://lab.hakim.se/zoom-js/js/zoom.js" ;
        document.head.appendChild( $script ) ;
        $script.onload = function() {
            $.render() ;
        };
        return ;
    }
    $.zoomeado = false ;
    this.ondblclick = function($e) {
        if( !$.zoomeado )
        zoom.to({
            element: $$.querySelector("slot") 
            , x: $e.clientX
            , y: $e.clientY
            , width: 200
            , height: 200
        });
        else
        zoom.out() ;
        $.zoomeado = !$.zoomeado ;
    }
}
    };window.customElements.define( "tiene-zoom", TieneZoom );

;class JqueryMobile extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this,$$=$.shadowRoot,$s1 = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",$s2 = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js",$s3 = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css";
    if( !window.jQuery ){fnScript($s1,function(){$.render()});return}
    if( !jQuery.mobile ){fnScript( $s2, function(){$.render()});fnLink($s3);return}
    var spl=DOC[PRIMER]("pantalla-splash") ;
    if(spl){setTimeout(f=>spl.cerrar(), 1000)};
}
    };window.customElements.define( "jquery-mobile", JqueryMobile );

;class CapturaPantalla extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
div {
    background: black ; color: white ; padding: 10px ;
}
${DETAILS}</style>
<div>
    Elemento: <input >
    <button capturar>Capturar</button>
    <a >Link</a>
    <details>
        <summary>Resultado</summary>
        <img style="border:1px solid grey">
    </details>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.html2canvas ) {
        fnScript("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", f=>$.render());
        return
    }
    $.input = $.qs("input");
    $.boton = $.qs("button");
    $.img = $.qs("img");
    $.link = $.qs("a");
    $.boton.onclick = function(){$.capturar()}
}

capturar() {
    var $=this,$$=$.shadowRoot;
    html2canvas( $.input.value || DOC.body )
        .then(function(c){
            $.img.src = c.toDataURL() ;
            if( $[HATT]("auto") ) $.qs("details")[SATT]("open",1)
            $.link.href = c.toDataURL() ;
            $.link.download = true ;

        })
    ;
}


    };window.customElements.define( "captura-pantalla", CapturaPantalla );

;class MagnificadorImagen extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div>
    <a 
        class="magnifier-thumb-wrapper" 
        href="http://en.wikipedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg"
    >
        <img 
            id="thumb" 
        >
    </a>
    <div 
        class="magnifier-preview" 
        id="preview" 
        style="width: 200px; height: 133px"
    >
        Starry Night Over The Rhone
        <br>by Vincent van Gogh
    </div>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.Magnifier ) {
        var $$$ = document.createElement("script");
        $$$.src=( "https://gorosito.red/dame/Event.js" );
        document.head.appendChild($$$);
        $$$ = document.createElement("script");
        $$$.src=( "https://gorosito.red/dame/Magnifier.js" );
        $$$.onload = (function(){
            $.render() ;
        });
        document.head.appendChild($$$);
        $$$ = document.createElement("link");
        $$$.rel="stylesheet";
        $$$.href=( "https://gorosito.red/dame/magnifier.css" );
        document.head.appendChild($$$);
        return ;
    }
    $$.querySelector("img").src = $[GATT]("imagen") ;
    console.log(4500,Magnifier);
    $.ev = new Event() ;
    $.objeto = new Magnifier( $.ev ) ;
    $.objeto.attach(
        {
            thumb: $$.querySelector("img"),
            large: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/400px-Starry_Night_Over_the_Rhone.jpg',
            largeWrapper: 'preview'
        }
    );
}
    };window.customElements.define( "magnificador-imagen", MagnificadorImagen );

;class TieneEventos extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<div><slot ></slot></div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $=this;
    if( !window.AlloyFinger ) {
        fnScript("https://gorosito.red/dame/alloy.js",x=>$.render());
        return;
    }
    $.eventos = $[GATT]("eventos") ;
    if( $.eventos ) $.eventos = window[ $.eventos ] ;
    return;
    var opciones={} ;
    if($[HATT]("rotar")) opciones.rotate=x=>$.eventos.rotar(x.angle/Math.PI*180);
    if($[HATT]("deslizar"))opciones.swipe=x=>$.eventos.deslizar(x.direction);
    if($[HATT]("zoom"))opciones.pinch=x=>$.eventos.zoom(x.zoom);
    if($[HATT]("mover"))opciones.pressMove=x=>$.eventos.mover(x.deltaX,x.deltaY);
    opciones.tap = x=>$.eventos??tocar();
    $.objeto = new AlloyFinger(
        $.qid("div")
        , opciones
    );
    console.log($.objeto)
}


    };window.customElements.define( "tiene-eventos", TieneEventos );

;class EsIcono extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<svg >
    <use></use>
</svg>            `;
            if( this.render ) this.render() ; 
        }
render () {
    var $this = this ;
    var $svg = $this.shadowRoot.querySelector("svg") ;
    var $use = $svg.querySelector( "use" ) ;
    
    var $ancho = $this.getAttribute( "ancho" ) || $this.getAttribute( "width" ) || 50 ;
    var $ref = $this.getAttribute( "ref" ) ;
    $svg.setAttribute("width", $ancho ) ;
    $svg.setAttribute("height", $ancho ) ;
    
    $use.setAttribute( "xlink:href", location.protocol + "//gorosito.red/dame/iconos.svg#" + $ref ) ;
}
    };window.customElements.define( "es-icono", EsIcono );

;class MapaGlobo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
div {
    min-width: 400px ;
    height: 400px ;
    max-width: 100% ;
    
}
div>canvas {
    background: black ;
}</style>
<div>
    
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this, $$ = $.shadowRoot ;
    if( !window.WE ) {
        fnScript("https://www.webglearth.com/v2/api.js", x => $.render());
        return ;
    }
    var $div = $$[PRIMER]("div") ;
    if( $[HATT]("alto") ) $div.style.height = $[GATT]("alto") ;
    if( $[HATT]("altura") ) $div.style.height = $[GATT]("altura") ;
    $.objeto = new WE.map( $div );
    WE
        .tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        )
        .addTo(
            $.objeto
        )
    ;
    $.marcadores = [] ;
    if( $[CODIGO].trim() != "" ) {
        $[CODIGO].trim().split("\n").forEach(function($cadaRenglon, $orden){
            var $columnas = $cadaRenglon.trim().split( "|" ) ;
            $.marcadores
                .push(
                    {
                          lat: $columnas[0]
                        , lon: $columnas[1]
                        , texto: $columnas[2]
                        , marcador: new WE.marker( [$columnas[0], $columnas[1]] ).addTo($.objeto)
                    }
                )
            ;
            $.marcadores[$orden].marcador.bindPopup(
                $columnas[2]
                , {
                    maxWidth: 160, closeButton: true
                }
            ).openPopup();
            
        })
    }
}
    };window.customElements.define( "mapa-globo", MapaGlobo );

;class ParaRecortar extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
<?php
</style>
<figure>
    <img>
</figure>            `;
            if( this.render ) this.render() ; 
        }
render($) {
    $ = this ;
    if( !window.Cropper ) {
        fnScript( "https://cdn.jsdelivr.net/npm/cropperjs", function(){
            $.render()
        });
        return fnLink("https://cdn.jsdelivr.net/npm/cropperjs/dist/cropper.min.css");
    }
    var $url = $[GATT]("url")||$[GATT]("ruta")||$[GATT]("foto")||$[GATT]("imagen")||"";
    $.qs("img").src = $url ;
    $.objeto = new Cropper(
        $.qs("img")
        , {
            crop: function( $situacion ) {
                console.log( $situacion.detail )
            }
        }
    )
}
    };window.customElements.define( "para-recortar", ParaRecortar );

;class EsSemaforo extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
:host {
    
}

rect {
    fill: gold ;
}

circle#idRojo {
    fill: brown ;
}

circle#idAmarillo {
    fill: orange ;
}

circle#idVerde {
    fill: green ;
}

:host(.rojo) circle#idRojo {
    fill: red ;
}
:host( .amarillo ) circle#idAmarillo {
    fill: yellow ;
}
:host( .verde ) circle#idVerde {
    fill: lime ;
}}</style>
<div>
    <svg width="100%" height="100%" >
        <rect id="idModulo"></rect>
        <circle id="idRojo"></circle>
        <circle id="idAmarillo"></circle>
        <circle id="idVerde"></circle>
    </svg>
</div>            `;
            if( this.render ) this.render() ; 
        }
static get observedAttributes()
{
    return [ "value", "width", "height" ] ;
}

attributeChangedCallback( $atributo, $antiguo, $nuevo ){var $=this;
    setTimeout( () => {
    var $svg = $.qs( "svg" ) ;
    var $rc = $svg[PRIMER]( "rect" ) ;
    var $rj = $svg[PRIMER]( "#idRojo" ) ;
    var $am = $svg[PRIMER]( "#idAmarillo" ) ;
    var $vd = $svg[PRIMER]( "#idVerde" ) ;

    if( $atributo == "width" ) {
        
    }
    else if( $atributo == "height" ) {
        var $ancho = $nuevo / 3 ;
        $rc[SATT]( "height", $nuevo ) ;
        $rc[SATT]( "width", $ancho ) ;
        $svg[SATT]( "height", $nuevo ) ;
        $rj[SATT]( "r", $nuevo/8 ) ;
            $rj[SATT]( "cy", $nuevo/6 );
            $rj[SATT]( "cx", $ancho/2 );
        $am[SATT]( "r", $nuevo/8 ) ;
            $am[SATT]( "cy", $nuevo/6*3 );
            $am[SATT]( "cx", $ancho/2 );
        $vd[SATT]( "r", $nuevo/8 ) ;
            $vd[SATT]( "cy", $nuevo/6*5 );
            $vd[SATT]( "cx", $ancho/2 );
    }
    });
}
    };window.customElements.define( "es-semaforo", EsSemaforo );

;class EsMapa extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div>
<iframe style='width:100%;border:none;height:10px' origen='https://wego.here.com/directions/mix//'  ></iframe>
</div>            `;
            if( this.render ) this.render() ; 
        }
render() {
    this.ancho = this[GATT]("ancho") || "100%" ;
    this.alto = this[GATT]("alto") || "300px" ;
    this.destino = this[GATT]( "destino" ) || "" ;
    let $mapa = this.qs("iframe") ;
    $mapa.style.height = this.alto ;
    $mapa.style.width = this.ancho ;
    $mapa.src = $mapa[GATT]("origen")+this.destino ;
}
    };window.customElements.define( "es-mapa", EsMapa );

;class EsMapa2 extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
iframe {
    width: 100% ;
    min-height: 300px ;
    
}
</style>
<iframe 
    frameborder="0" 
    id="ibeebv" 
    src="https://maps.google.com/maps?&q=obelisco buenos aires&z=13&t=w&output=embed"
></iframe>            `;
            if( this.render ) this.render() ; 
        }
render() {
    var $ = this ;
    $.objeto = $.qs("iframe") ;
    // https://maps.google.com/maps?&
    //q=obelisco buenos aires&
    //z=13&
    //t=w&
    //output=embed
    $buscar = $[GATT]("buscar")||"Obelisco Buenos Aires" ;
    $zoom = $[GATT]("zoom")|| 16 ;
    $.objeto.setAttribute(`https://maps.google.com/maps?&q=${$buscar}&z=${$zoom}&t=w&output=embed`)
}
    };window.customElements.define( "es-mapa2", EsMapa2 );

;class SweetAlert extends HTMLMejoradoElement{constructor (){super() ;}connectedCallback(){let shadowRoot = this.attachShadow({mode: "open"});shadowRoot.innerHTML = `
<style>
</style>
<div id="idSweetAlert">
    <slot />
</div>            `;
            if( this.render ) this.render() ; 
        }
render () { //function
    var $=this,$$=$.shadowRoot;
    if(!window.Swal ) {
        fnLink("https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.min.css")
        return fnScript("https://cdn.jsdelivr.net/npm/sweetalert2@11.7.12/dist/sweetalert2.all.min.js", x=>$.render())
    }
    $.main = $.qs("div") ;
    setTimeout(function() {
        var $hijos = $.qsa( ":scope>sweet-alert" ) ;
        $.ok = $hijos[0] ;
        $.no = $hijos[1] || null ;
    }, 100)
}



mostrar( dadaRazon ) {
    var $=this
    ,$mensaje=$[GATT]("mensaje")||$[GATT]("message")||$.innerHTML.trim()
    ,$titulo=$[GATT]("titulo")||$[GATT]("title")
    ,$tipo=$[GATT]("type")||$[GATT]("tipo")||"success"
    ,$ok=$[GATT]("ok")
    ,$no=$[GATT]("no")
    ;
    Swal.fire(
        {
            title: $titulo
            , text: $mensaje
            , icon: $tipo
            , confirmText: $ok
            , cancelText: $no
        }
    ).then(x=>{
        try {
        if( x.dismiss ) $.no.mostrar(x.dismiss) ;
        else $.ok.mostrar(x.value) ;
        }catch(e){}
    })
}
    };window.customElements.define( "sweet-alert", SweetAlert );

