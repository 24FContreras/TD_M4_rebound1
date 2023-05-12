"use strict";

console.log("🟢 Connected!");

var form = document.querySelector("form");

var monto = document.querySelector("#monto");
var interes = document.querySelector("#interes");
var cuotas = document.querySelector("#cuotas");
var mensaje = document.querySelector("#mensaje");

var formatearDivisa = function formatearDivisa(cantidad) {
  var CLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  });

  return CLP.format(cantidad);
};

calcularCuotas = function calcularCuotas(monto, cuotas) {
  return parseInt(monto) / parseInt(cuotas);
};

calcularInteres = function calcularInteres(monto, interes) {
  return parseInt(monto) / 100 * parseInt(interes);
};

var obtenerMensaje = function obtenerMensaje(monto, porcentaje, cantidadCuotas) {
  var interes = calcularInteres(monto, porcentaje);
  var total = interes + parseInt(monto);
  var valorCuota = calcularCuotas(total, cantidadCuotas);

  mensaje.textContent = "!No te preocupes! Puedes pagarlo en " + cuotas.value + " cuotas de " + formatearDivisa(valorCuota);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!monto.value) {
    alert("Debe ingresar un monto");
    monto.focus();
    return;
  }

  if (!interes.value) {
    alert("Debe ingresar su % de interés");
    interes.focus();
    return;
  }

  if (!cuotas.value) {
    alert("Debe ingresar su N° de cuotas");
    cuotas.focus();
    return;
  }

  obtenerMensaje(monto.value, interes.value, cuotas.value);
});