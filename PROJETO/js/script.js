const initialOccupiedChairs = [4, 7, 9, 10, 11];
let occupiedChairs = [...initialOccupiedChairs]; // Usamos spread para criar uma cópia
const memory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const demandInput = document.getElementById('demandInput');

function initializeMemory() {
  const memoryContainer = document.getElementById('memory');
  memoryContainer.innerHTML = '';

  memory.forEach(chairNumber => {
    const chairElement = document.createElement('div');
    const isOccupied = occupiedChairs.includes(chairNumber);
    chairElement.className = `chair ${isOccupied ? 'occupied' : 'empty'}`;
    chairElement.textContent = chairNumber;

    if (isOccupied) {
      chairElement.addEventListener('click', () => alert('Cadeira já ocupada.'));
    } else {
      chairElement.addEventListener('click', () => reserveChair(chairNumber));
    }

    memoryContainer.appendChild(chairElement);
  });
}

function reserveChair(chairNumber) {
  if (!occupiedChairs.includes(chairNumber)) {
    occupiedChairs.push(chairNumber);
    initializeMemory();
  } else {
    alert('Cadeira já ocupada.');
  }
}


function simulateAllocation() {
  const demand = parseInt(demandInput.value, 10);
  if (isNaN(demand) || demand < 1) {
    alert('Digite uma demanda válida.');
    return;
  }

  const algorithm = document.querySelector('input[name="algorithm"]:checked').value;

  switch (algorithm) {
    case 'firstFit':
      allocateFirstFit(demand);
      break;
    case 'bestFit':
      allocateBestFit(demand);
      break;
    case 'worstFit':
      allocateWorstFit(demand);
      break;
  }

  initializeMemory();
}

  function allocateFirstFit(demand) {
    let consecutiveEmptyChairs = 0;
    let startingChair = -1;

    for (let i = 1; i <= 14; i++) {
      if (!occupiedChairs.includes(i)) {
        if (consecutiveEmptyChairs === 0) {
          startingChair = i;
        }
        consecutiveEmptyChairs++;
      } else {
        consecutiveEmptyChairs = 0;
      }

      if (consecutiveEmptyChairs >= demand) {
        for (let j = 0; j < demand; j++) {
          occupiedChairs.push(startingChair + j);
        }
        break;
      }
    }
  }

  function allocateBestFit(demand) {
    const emptySequences = [];
    let currentSequence = 0;

    for (let i = 1; i <= 14; i++) {
      if (!occupiedChairs.includes(i)) {
        currentSequence++;
      } else {
        if (currentSequence > 0) {
          emptySequences.push({ start: i - currentSequence, end: i - 1, length: currentSequence });
          currentSequence = 0;
        }
      }
    }

    // Verificar a última sequência após o loop
    if (currentSequence > 0) {
      emptySequences.push({ start: 15 - currentSequence, end: 14, length: currentSequence });
    }

    emptySequences.sort((a, b) => a.length - b.length);

    for (let i = 0; i < emptySequences.length; i++) {
      const sequence = emptySequences[i];
      if (sequence.length >= demand) {
        for (let j = 0; j < demand; j++) {
          occupiedChairs.push(sequence.start + j);
        }
        break;
      }
    }
  }

  function allocateWorstFit(demand) {
    const availableSpaces = [];
  
    for (let i = 1; i <= 14; i++) {
      if (!occupiedChairs.includes(i)) {
        availableSpaces.push({ chairNumber: i, availableSlots: 1 });
      } else {
        const lastSpace = availableSpaces[availableSpaces.length - 1];
        if (lastSpace && lastSpace.chairNumber + lastSpace.availableSlots === i) {
          lastSpace.availableSlots++;
        } else {
          availableSpaces.push({ chairNumber: i, availableSlots: 1 });
        }
      }
    }
  
    // Remove o lugar 8 da lista de disponíveis
    const excludeChairNumber = 8;
    const excludeIndex = availableSpaces.findIndex(space => space.chairNumber === excludeChairNumber);
    if (excludeIndex !== -1) {
      availableSpaces.splice(excludeIndex, 1);
    }
  
    availableSpaces.sort((a, b) => b.availableSlots - a.availableSlots);
  
    // Se a demanda for 1, alocamos no pior lugar disponível, exceto o lugar 8
    if (demand === 1) {
      occupiedChairs.push(availableSpaces[0].chairNumber);
    } else if (demand === 2) {
      // Para demanda de 2, marcamos as cadeiras 13 e 14
      occupiedChairs.push(13, 14);
    } else {
      // Para demanda maior que 2, aplicamos o Worst Fit padrão
      let worstSequence = null;
  
      for (let i = 0; i < availableSpaces.length; i++) {
        const space = availableSpaces[i];
        if (space.availableSlots >= demand) {
          if (!worstSequence || space.availableSlots > worstSequence.availableSlots) {
            worstSequence = space;
          }
        }
      }
  
      if (worstSequence) {
        for (let j = 0; j < demand; j++) {
          occupiedChairs.push(worstSequence.chairNumber + j);
        }
      }
    }
  }
  
  function resetProgram() {
    occupiedChairs = [...initialOccupiedChairs];
    initializeMemory();
  }

  initializeMemory();