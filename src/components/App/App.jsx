import React from 'react';
import Base from '../Base';

export default class App extends React.Component {
  render() {
    const bacon = 'Bacon ipsum dolor amet burgdoggen shoulder venison biltong. Kielbasa landjaeger drumstick biltong alcatra salami tail beef ribs meatball shankle bresaola corned beef filet mignon. Chicken landjaeger swine biltong pancetta turkey ham hock alcatra shank kielbasa doner turducken jerky. Doner pork loin fatback biltong ham hock turkey pork prosciutto kielbasa andouille bresaola pastrami. Boudin cow turducken swine salami rump sausage spare ribs cupim bresaola jerky ribeye. Cow bresaola corned beef drumstick, fatback andouille ham swine ground round pork loin rump tri-tip.';
    const brisket = 'Brisket sausage prosciutto andouille ham, short loin beef meatloaf tail pastrami meatball corned beef tenderloin. Kevin pork porchetta sirloin flank, doner cupim tenderloin salami pork loin meatloaf capicola kielbasa drumstick landjaeger.';
    return (
      <div>
        <h1>React App</h1>
        <hr />
        <Base title="Bacon" content={bacon} />
        <Base title="Brisket" content={brisket} />
      </div>);
  }
}
