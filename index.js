function challenge_01() {
  // Results here...

  const TEST1 = 'llaveS casa CASA casa llaves';
  const TEST2 = 'taza ta za taza';
  const TEST3 = 'gato perro perro coche Gato peRRo sol';
  const TEST4 = 'casas casa casasas';
  const FINAL_TEST =
    'murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco tigre jaguar leopardo oso lobo zorro mapache ardilla elefante rinoceronte hipopotamo cebra jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago flamenco pinguino tucan loro canario colibri buho aguila halcon paloma pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo leon jirafa murcielago caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco murcielago leon jirafa cebra elefante rinoceronte hipopotamo ardilla mapache zorro lobo oso puma jaguar tigre leopardo gato perro caballo vaca toro cerdo oveja cabra gallina pato ganso pavo paloma halcon aguila buho colibri canario loro tucan pinguino flamenco oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato leopardo tigre jaguar oso lobo zorro mapache ardilla cebra elefante rinoceronte hipopotamo jirafa leon murcielago pavo ganso pato gallina cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon paloma colibri canario loro tucan pinguino flamenco jaguar oso lobo zorro mapache ardilla hipopotamo rinoceronte elefante jirafa leon murcielago cabra oveja cerdo toro vaca caballo perro gato buho aguila halcon';

  // Type here..

  String.prototype.getNumeredList = function (
    lwthisArr = this.toLowerCase().split(' ')
  ) {
    return [...new Set(lwthisArr)]
      .map((v) => v + lwthisArr.filter((p) => p == v).length)
      .join('');
  };

  // Test here...

  console.log(
    'TEST1 ->',
    TEST1.getNumeredList() === 'llaves2casa3' ? 'Great!' : 'Try again :(',
    ';',
    TEST1.getNumeredList(),
    '=?',
    'llaves2casa3'
  );
  console.log(
    'TEST2 ->',
    TEST2.getNumeredList() === 'taza2ta1za1' ? 'Great!' : 'Try again :(',
    ';',
    TEST2.getNumeredList(),
    '=?',
    'taza2ta1za1'
  );
  console.log(
    'TEST3 ->',
    TEST3.getNumeredList() === 'gato2perro3coche1sol1'
      ? 'Great!'
      : 'Try again :(',
    ';',
    TEST3.getNumeredList(),
    '=?',
    'gato2perro3coche1sol1'
  );
  console.log(
    'TEST4 ->',
    TEST4.getNumeredList() === 'casas1casa1casasas1'
      ? 'Great!'
      : 'Try again :(',
    ';',
    TEST4.getNumeredList(),
    '=?',
    'casas1casa1casas1'
  );
  console.log('FINAL_SOLUTION ->', FINAL_TEST.getNumeredList());
}

// Solutions:

challenge_01();
