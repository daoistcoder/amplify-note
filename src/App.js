import { SocialPostCollection, NavBarHeader, NoteCreateForm, NoteUpdateForm } from './ui-components';
import { useState } from 'react';

function App() {
  // using useState hook show modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <div style={{backgroundColor: '#F5F5F5'}}>
      <NavBarHeader width={'100%'} marginBottom={'20px'} />
      <div className='container'>
        <SocialPostCollection overrides={{AddPostBtn: { onClick: () => setShowCreateModal (true)} }}/>
      </div>
      {/* When I click a button inside this component showCreateModal to true */}
      <div className='modal' style={{ display: showCreateModal === false && 'none'}}>
        <NoteCreateForm />
      </div>
      <div className='modal' style={{display: 'none'}}>
        <NoteUpdateForm />
      </div>
    </div>
  );
}

export default App;
