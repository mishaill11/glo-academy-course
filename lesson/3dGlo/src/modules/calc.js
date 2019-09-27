const calc = (price) => {
    const calcInput = document.querySelectorAll('input[type="number"]'),
        calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        totalValue = document.querySelector('#total');
    
    calcInput.forEach((elem) => {
        elem.addEventListener('input', (event) => {
            let target = event.target;
            target.value = target.value.replace(/[A-Za-z./,'"!&?*%]+/, '');
        });
    });        

    const countSum = () => {
        let total = 0,
        countValue = 1,
        dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcInput[0].value;
        
        if(calcInput[1].value > 1) {
            countValue += (calcInput[1].value - 1) / 10;
        }

        if (calcInput[2].value && calcInput[2].value < 5) {
            dayValue *= 2;
        } else if (calcInput[2].value && calcInput[2].value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
        }
        if (total > 0) {
            let num = 0;
            let interval = setInterval(() => {                   
                totalValue.textContent = num+=50;
                if (num >= total) {
                    totalValue.textContent = num-(num-total);
                    clearInterval(interval);    
                }
            }, 1);
        }
        
    };
    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;