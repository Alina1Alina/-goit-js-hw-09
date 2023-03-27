import Notiflix from 'notiflix';

const refs = { 
  form: document.querySelector('form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
  button: document.querySelector('button')
}

refs.form.addEventListener('submit', handelSubmit)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => { 
      if (shouldResolve) {
        resolve({ position, delay })
     } else { 
        reject({position, delay})
      }
    }, delay)
  })
}


function onSucces(position, delay){
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 1000,
          });
}
function onError(position, delay) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,
    {
      timeout: 1000,
    });
}

  function handelSubmit(ev) {
    ev.preventDefault();
    const inpDelay = Number(refs.inputDelay.value);
    const inpStep = Number(refs.inputStep.value);
    const inputAmount = Number(refs.inputAmount.value);
    let stepCounter = inpDelay;
    for (let i = 1; i <= inputAmount; i++) {
      createPromise(i, stepCounter)
        .then(({ position, delay }) => {
          onSucces(position, delay);
        })
        .catch(({ position, delay }) => {
          onError(position, delay);
        });
      stepCounter += inpStep;
    }
    refs.form.reset();
  }