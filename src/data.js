export const dataPotter = (data) => {
  const dataNueva = [];
  data.forEach((element) => {
    dataNueva.push({
      image: element.image,
      species: element.species,
      name: element.name,
      house: element.house ? element.house : 'Sin casa',
      gender: element.gender,
      patronus: element.patronus ? element.patronus : 'Sin patronus',
      actor: element.actor,
      hogwartsStaff: element.hogwartsStaff,
      hogwartsStudent: element.hogwartsStudent,
      yearOfBirth: element.yearOfBirth ? element.yearOfBirth : 'Sin Año',
      wand: element.wand,
    });
  });
  return dataNueva;
};


export const ordenadorAZ = (nombres) => {
  const arrayNombre = nombres.slice().sort((aa, bb) => (aa.name > bb.name ? 1 : -1));
  return arrayNombre;
};

export const ordenadorAnioAsc = (fecha) => {
  const arraAnio = fecha.slice().sort((aa, bb) => (bb.yearOfBirth - aa.yearOfBirth));
  return arraAnio;
};

export const ordenadorAnioDesc = (fecha) => {
  const arraAnio = fecha.slice().sort((aa, bb) => (aa.yearOfBirth - bb.yearOfBirth));
  return arraAnio;
};

export const filtrarCasa = (data, casa) => {
  const filtradorCasa = data.filter((element) => (element.house === casa));
  return filtradorCasa;
};

export const filtrarGenero = (data, genero) => {
  const filtradorGenero = data.filter((element) => (element.gender === genero));
  return filtradorGenero;
};

export const filtrarRol = (data, rol) => {
  const isStaff = rol === 'staff';
  const isStudent = rol === 'student';
  const filtradorRol = data.filter((element) => (
    element.hogwartsStaff === isStaff && element.hogwartsStudent === isStudent));
  return filtradorRol;
};

export const filtrarVaritas = (data, varitas) => {
  const filtradorVaritas = data.filter((element) => (element.wand.core === varitas));
  return filtradorVaritas;
};
