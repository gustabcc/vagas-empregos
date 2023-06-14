/* 
   ## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/

let vacancyList = [];

function menu() {
   
   return prompt(
      '\n1. Listar Vagas Adicionais' +
      '\n2. Criar Novas Vagas' +
      '\n3. Visualizar Vagas' +
      '\n4. Inscrever Candidatos' +
      '\n5. Excluir Vagas' +
      '\n6. Sair'
   )

}

function listVacancies() {
   const availableVacancies = vacancyList.reduce(function(text, vacancy, index) {
      text += (index + 1) + '. ' 
      text += vacancy.name
      text += ' (' + vacancy.candidates.length + ' candidatos)\n'

      return text
   }, '')

   alert(availableVacancies);
}

function newVacancy() {

   const name = prompt('Insira o nome da vaga: ');
   const description = prompt('Descreva o cargo a ser ocupado: ');
   const deadline = prompt('Insira uma data limite para se inscrever na vaga: ');

   const confirmation = confirm(
      'Deseja salvar as seguintes informações: ' +
      '\nNome da vaga: ' + name +
      '\nDescrição da vaga: ' + description +
      '\nData limite para inscrição: ' + deadline
   )

   if(confirmation) {
      const newVacancy = {name, description, deadline, candidates: []}

      vacancyList.push(newVacancy);
      alert('Vaga criada com sucesso!!');
   }

   return vacancyList;
}

function viewVacancy() {
   const index = prompt('Insira o indice da vaga que deseja ver: ')
   const vacancy = vacancyList[index];

   const candidatesInVacancy = vacancy.candidates.reduce(function(text, candidate) {
      return text + '\n - ' + candidate
   }, '');

   alert(
      'Vaga nº: ' + vacancy.name +
      '\nNome: ' + vacancy.candidates +
      '\nData Limite: ' + vacancy.deadline +
      '\nQuantidade de candidatos na para a vaga até o momento: ' + vacancy.candidates.length +
      '\nCandidatos inscritos: ' + candidatesInVacancy
   )
}

function newCandidate() {
   const candidate = prompt('Informe o nome do candidato: ');
   const index = prompt('Informe a vaga para qual o candidato deseja se inscrever: ');
   const vacancy = vacancyList[index];

   const confirmation = confirm(
      'Deseja salvar as seguintes informações:\n' +
      'Candidato: ' + candidate + ' na vaga: ' + index + '?\n' +
      'Nome: ' + vacancy.name + '\nDescrição: ' + vacancy.description + '\nData Limite: ' + vacancy.deadline
   )

   if(confirmation) {
      vacancy.candidates.push(candidate)
      alert('Inscriação realizada!!');
   }
}

function deleteVacancy() {
   const index = prompt('Informe o indice da vaga que deseja excluir: ');
   const vacancy = vacancyList[index];

   const confirmation = confirm(
      'Deseja excluir a vaga ' + index + '?\n' +
      'Nome: ' + vacancy.name + '\nDescrição: ' + vacancy.description + '\nData Limite: ' + vacancy.deadline
   )

   if(confirmation) {
      vacancyList.splice(index, 1);
      alert('Vaga excluida com sucesso!!');
   }
}

function execute() {
   let option = '';

   do {
      option = menu();

      switch(option) {
         case'1':
            listVacancies();
            break;

         case'2':
            newVacancy();
            break;

         case'3':
            viewVacancy();
            break;

         case'4':
            newCandidate();
            break;

         case'5':
            deleteVacancy();
         break;
         
         case'6':
            alert('Finalizando...');
            break;
         
         default:
            alert('Opção inválida, tente novamente');
      }
   } while (option !== '6')
}

 execute();

