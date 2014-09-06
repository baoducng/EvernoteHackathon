angular.module('evernote').factory('dummyData', function(){
  var dummyData = {};
  dummyData.data = [
    {front: 'This is card 1',back: 'ok!!!!'},
    {front: 'This is card 2',back: 'ok!11!!!'},
    {front: 'This is card 3',back: '22ok!!!!'},
    {front: 'This is card 4',back: '333ok!!!!'},
    {front: 'This is card 5',back: '444ok!!!!'},
    {front: 'This is card 6',back: '55ok!!!!'},
    {front: 'This is card 7',back: '66ok!!!!'}
  ];
  return dummyData;
});
