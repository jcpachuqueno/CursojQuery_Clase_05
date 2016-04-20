//
//
// 	JS Elevador
//	CMM
//
//

window.addEventListener('load', Initialize);

function Initialize()
{
	LIBRO.Init();
}

var LIBRO = LIBRO || {}; 

LIBRO.elevador = null;

LIBRO.Init = function()
{
	LIBRO.elevador = new Elevador();
	LIBRO.elevador.Init();
};

LIBRO.ElevadorLinkClick = function(event)
{
	LIBRO.elevador.LinkClick(event);	
};

function Elevador()
{
	this.parallax = document.getElementById("parallaxArea");
	this.listaLinks = [];
	this.tick = null;
	this.distanceToMove = 0;
	this.positionToStart = 0;
	this.positionDelta = 0;
	this.estaMoviendose = false;
	this.escalar = 80;
	this.direction = 1;
	
	this.deltaTime = 0.0;
  	this.prevTime = Date.now();
	this.time = 0;
}

Elevador.prototype.Init = function()
{
	this.initEventsListenersForLinks();
	this.parallax.addEventListener('wheel', PreventScroll);
};

Elevador.prototype.initEventsListenersForLinks = function()
{
	this.listaLinks = document.getElementsByClassName('elevador');
	for(var i = 0; i < this.listaLinks.length; ++i)
		this.listaLinks[i].addEventListener("click", LIBRO.ElevadorLinkClick);
};

Elevador.prototype.LinkClick = function(event)
{
	event.preventDefault();
	if(this.estaMoviendose) return;
	var sectionToMoveName = this.getSectionToMoveName(event.target);
	this.bajarAlPisoDeLaSeccion(sectionToMoveName);
};

Elevador.prototype.getSectionToMoveName = function(link)
{
	var sectionToMove = link.getAttribute("href");
	var sectionToMoveList = sectionToMove.split("#");
	if(sectionToMoveList.length == 1) return "";
	
	return sectionToMoveList[1];	
};

Elevador.prototype.bajarAlPisoDeLaSeccion = function(sectionName)
{
	var sectionElement = document.getElementById(sectionName);	
	var sectionRect = sectionElement.getBoundingClientRect();
	this.setDistanceToMoveFromActualPosition(sectionRect);
	this.startMovement();
};

Elevador.prototype.setDistanceToMoveFromActualPosition = function(sectionRect)
{
	this.distanceToMove = sectionRect.top;
	
	if(this.distanceToMove < 0)
	 	this.direction = -1;
	else
		this.direction = 1;
};

Elevador.prototype.startMovement = function()
{
	this.tick = setInterval(LIBRO.Update, 1000/30);
	this.positionToStart = this.parallax.scrollTop;
	this.positionDelta = 0;
	this.estaMoviendose = true;
};

Elevador.prototype.update = function()
{
	this.clock();
	this.sumarPosicionAScroll();
	this.revisarLaPosicionDelElevador();
	this.aumentarPosicion();
};

Elevador.prototype.clock = function()
{
  var now = Date.now();
  this.deltaTime = (now - this.prevTime) / 1000;
  this.prevTime = now;
  this.time += this.deltaTime;
};

Elevador.prototype.sumarPosicionAScroll = function()
{
	var cantidadASumar = this.positionDelta + this.positionToStart;
	this.parallax.scrollTop = cantidadASumar;
};

Elevador.prototype.revisarLaPosicionDelElevador = function()
{
	if(this.haLlegadoAlPisoSeleccionado())
		this.finishMovement();
	else
		this.revisarSiLlegoAlTiempoLimite();
};

Elevador.prototype.haLlegadoAlPisoSeleccionado = function()
{
	if(this.direction > 0 && this.positionDelta >= (this.distanceToMove))
		return true;
		
	else if(this.direction < 0 && this.positionDelta <= (this.distanceToMove + this.escalar - 100))
		return true;
		
	return false;
};

Elevador.prototype.finishMovement = function()
{
	clearInterval(this.tick);
	this.estaMoviendose = false;
	this.time = 0;
};

Elevador.prototype.revisarSiLlegoAlTiempoLimite = function()
{
	if(this.time > 30.0)
		this.finishMovement();	
};

Elevador.prototype.aumentarPosicion = function()
{
	this.positionDelta += (this.escalar * this.direction);
}

LIBRO.Update = function()
{
	LIBRO.elevador.update();
};

function PreventScroll(event)
{
	if(LIBRO.elevador.estaMoviendose)
		event.preventDefault();
}