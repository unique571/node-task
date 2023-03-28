const yargs = require('yargs');

yargs.command({
  command: 'calculate',
  describe: 'Perform a calculation',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'number'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'number'
    },
    operator: {
      describe: 'Operator (+, -, *, /)',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    switch (argv.operator) {
      case '+':
        console.log(`${argv.num1} + ${argv.num2} = ${argv.num1 + argv.num2}`);
        break;
      case '-':
        console.log(`${argv.num1} - ${argv.num2} = ${argv.num1 - argv.num2}`);
        break;
      case '*':
        console.log(`${argv.num1} * ${argv.num2} = ${argv.num1 * argv.num2}`);
        break;
      case '/':
        console.log(`${argv.num1} / ${argv.num2} = ${argv.num1 / argv.num2}`);
        break;
      default:
        console.log('Invalid operator');
    }
  }
});

yargs.parse();