import { SocialPostCollection, NavBarHeader, NoteCreateForm, NoteUpdateForm } from './ui-components';


function App() {
  return (
    <div style={{backgroundColor: '#F5F5F5'}}>
      <NavBarHeader width={'100%'} marginBottom={'20px'} />
      <div className='container'>
        <SocialPostCollection />
      </div>
      <div className='modal' style={{display: 'none'}}>
        <NoteCreateForm />
      </div>
      <div className='modal' style={{display: 'none'}}>
        <NoteUpdateForm />
      </div>
    </div>
  );
}

export default App;
