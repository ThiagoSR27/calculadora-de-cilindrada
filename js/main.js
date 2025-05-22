


function calcularCilindrada() {
      let D = parseFloat(document.getElementById('diametro').value);
      let C = parseFloat(document.getElementById('curso').value);
      let NC = parseInt(document.getElementById('cilindros').value);

      //converterndo para cm
      let D_cm = D / 10
      let C_cm = C /10

      if (isNaN(D) || isNaN(C) || isNaN(NC)) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
      }
      const pi = 3.1416;
      let clilindrada = (NC * pi * Math.pow(D_cm, 2)* C_cm) / 4

      document.getElementById('resultado').innerText = `A cilindrada é: ${clilindrada.toFixed(2)} cm³`;

      }