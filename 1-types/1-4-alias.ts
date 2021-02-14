{
  // Type Aliases
  type Text = string;
  const name: Text = 'whamma';
  const address: Text = 'korea';
  type Num = number;
  const age: Num = 100;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'whamma',
    age: 100,
  };

  // String Literal Types
  type Name = 'name';
  let whamma: Name;
  whamma = 'name';

  type Bool = true;
  const isCat: Bool = true;
  // const isCat: Bool = false; error

}