import{updateJetpackSettings}from '../jetpack-settings';describe('Jetpack Settings updateJetpackSettings action',()=>{const action=updateJetpackSettings(undefined,undefined);test('yield setJetpackSettings state to new one',()=>{expect(action.next().value.type).toEqual('CREATE_NOTICE');expect(action.next().value.type).toEqual('SET_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('SET_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('UPDATE_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('FETCH_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('SET_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('REMOVE_NOTICE');expect(action.next().value.type).toEqual('SET_WORDADS_SETTINGS');expect(action.next().value.type).toEqual('CREATE_NOTICE');});});