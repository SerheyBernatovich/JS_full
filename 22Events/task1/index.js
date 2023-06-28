const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clear = document.querySelector('.clear-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clearList = () => {
  eventsListElem.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const attachHandlersBtn = () => {
  divElem.addEventListener('click', logGreyDiv, { capture: true });
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

const removeHandlersBtn = () => {
  divElem.removeEventListener('click', logGreyDiv, { capture: true });
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

clear.addEventListener('click', clearList);
attachHandlers.addEventListener('click', attachHandlersBtn);
removeHandlers.addEventListener('click', removeHandlersBtn);
document.addEventListener('DOMContentLoaded', attachHandlersBtn);
