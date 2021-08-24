1.let a = 'hello';
  let b = 'owu';
  let c = 'com';
  let d = 'ua';
  let e = 1;
  let f = 10;
  let g = -999;
  let h = 123;
  let i = 3.14;
  let j = 2.7;
  let k = 16;
  let isMarried = false;
  let hasWife = true;
  console.log (a);
  alert (a);
  document.write (a);
  console.log (b);
  alert (b);
  document.write (b);
  console.log (c);
  alert (c);
  document.write(c);
  console.log (d);
  alert (d);
  document.write(d);
  console.log (e);
  alert (e);
  document.write(e);
  console.log (f);
  alert (f);
  document.write(f);
  console.log (g);
  alert (g);
  document.write(g);
  console.log (h);
  alert (h);
  document.write(h);
  console.log (i);
  alert (i);
  document.write(i);
  console.log (j);
  alert (j);
  document.write(j);
  console.log (k);
  alert (k);
  document.write(k);
  console.log (isMarried);
  alert (isMarried);
  document.write (isMarried);
  console.log (hasWife);
  alert (hasWife);
  document.write (hasWife);
  2.  let a = 'bye';
      let b = 'howu';
      let c = 'comit';
      let d = 'uk';
      let e = 111;
      let f = 100;
      let g = -99988;
      let h = 1237;
      let i = 3.146;
      let j = 2.76;
      let k = 166;
      let isMarried = true;
      let hasWife = false;
    console.log (a);
    alert (a);
    document.write (a);
    console.log (b);
    alert (b);
    document.write (b);
    console.log (c);
    alert (c);
    document.write(c);
    console.log (d);
    alert (d);
    document.write(d);
    console.log (e);
    alert (e);
    document.write(e);
    console.log (f);
    alert (f);
    document.write(f);
    console.log (g);
    alert (g);
    document.write(g);
    console.log (h);
    alert (h);
    document.write(h);
    console.log (i);
    alert (i);
    document.write(i);
    console.log (j);
    alert (j);
    document.write(j);
    console.log (k);
    alert (k);
    document.write(k);
    console.log (isMarried);
    alert (isMarried);
    document.write (isMarried);
    console.log (hasWife);
    alert (hasWife);
    document.write (hasWife);

    3. let name = prompt ('Sergo');
      let fathername = prompt('Valeriyovuch');
      let age = prompt(21);
      if (name == 'Sergo' && fathername == 'Valeriyovuch' && age == 21) {
      document.write ('"Вітаю Sergo Valeriyovuch. Тобі 21 років"')
      }

4. Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація). - Я не розумію завдання.
5. let num1 = prompt (1);
   let num2 = prompt (2);
   let num3 = prompt (3);
   Кароче,всі оці завдання типу цього ніфіга не зрозумілі.

      6.5 < 6 -> true
        5 > 6 -> false
        5 == 6 -> false
        5 >= 6 -> false
        10 == 10 -> true
        10 === 10 -> true
        10 !== 10 -> false
        10 < 10 -> false
        10 > 10 -> false
        123 === '123' -> false
        123 == '123' -> true


7.console.log(132 > 100 && 45 < 12 );                                - false;
  console.log(34 > 33 && 23 < 90 );                                  - true;
  console.log(99 > 100 && 45 > 12 );                                 - false;
  console.log(132 > 100 || 45 < 12 );                                - true;
  console.log(111 > 11 || 45 < 111 );                                - true;
  console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );    - true;
  console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );     - true;
  console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );  - false;
  console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));     - true;
  console.log(!!'-1');                                               - true; //подглянул в консоль а то не помню как со стрингами.
  console.log(!!-1);                                                 - true; //завал жесть, 2 подряд неправильно.
  console.log(!!'0');                                                - true;
  console.log(!!'null');                                             - true;
  console.log(!!'undefined');                                        - true;
  console.log(!!(3/'owu'));                                          - false //вообще хз как тут думать над таким.
  console.log((111 > 11 || 45 < 111) ||  !!'0');                     - true;
  console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));- false - хз как 111 == 11 . Срака.

  8. Задачки:

 1.let num1 = prompt (10);
   let num2 = prompt (100);
   let num3 = prompt (1000);

   if (num1 < num2 && num2< num3) {
   document.write (num1, num2, num3)
   }


 2.let lights = prompt ('Svetlofor');

   switch(lights) {
   case 'green':
   alert('go');
   break;
   case 'yellow':
   alert('wait');
   break;
   case 'red':
   alert('stop');
   break;
   default:
   alert('Do what u want')
   }


 3. let isRoadClear = prompt ('Hard level');

     switch (isRoadClear) {
     case 'green && no cars':
     alert('go');
     break;
     case 'yellow && cars':
     alert('wait');
     break;
     case 'red && no cars':
     alert('stop anywhere');
     break;
     case 'red && cars':
     alert ('stop and wait');
     break;
     default:
     alert ('do waht u want')

     }
