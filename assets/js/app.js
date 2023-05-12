console.log("🟢 Connected!");

const form = document.querySelector("form");

const monto = document.querySelector("#monto");
const interes = document.querySelector("#interes");
const cuotas = document.querySelector("#cuotas");
const mensaje = document.querySelector("#mensaje");

const formatearDivisa = (cantidad) => {
  let CLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return CLP.format(cantidad);
};

calcularCuotas = (monto, cuotas) => {
  return parseInt(monto) / parseInt(cuotas);
};

calcularInteres = (monto, interes) => {
  return (parseInt(monto) / 100) * parseInt(interes);
};

const obtenerMensaje = (monto, porcentaje, cantidadCuotas) => {
  const interes = calcularInteres(monto, porcentaje);
  const total = interes + parseInt(monto);
  const valorCuota = calcularCuotas(total, cantidadCuotas);

  mensaje.textContent = `!No te preocupes! Puedes pagarlo en ${
    cuotas.value
  } cuotas de ${formatearDivisa(valorCuota)}`;
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
