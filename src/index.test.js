const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Grade classifier', () => {
  it('When the user inputs an integer between 95-100, then the function should an "O"/Outstanding grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(95);

    //assert
    expect(grade).toBe("O");
    
  });
  it('When the user inputs an integer between 90-94, then the function should return a "V"/Very Good grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(90);

    //assert
    expect(grade).toBe("V");

  });
  it('When the user inputs an integer between 85-89, then the function should return a "G"/Good grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(86);

    //assert
    expect(grade).toBe("G");

  });
  it('When the user inputs an integer between 80-84, then the function should return an "S"/Satisfactory grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(81);

    //assert
    expect(grade).toBe("S");

  });
  it('When the user inputs an integer between 75-79, then the function should return an "N"/Needs Improvement grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(78);

    //assert
    expect(grade).toBe("N");
  });
  it('When the user inputs an integer 74.99 and below, then the function should return an "D"/Did Not Meet Expectation grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(73);

    //assert
    expect(grade).toBe("D");
  });

  it('When user inputs a float between 95-100, then the function should an "O"/Outstanding grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(99.999999);

    //assert
    expect(grade).toBe("O");

  });
  
  it('When user inputs a float between 90-94, then the function should return a "V"/Very Good grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(92.0001);

    //assert
    expect(grade).toBe("V");

  });
  
  it('When user inputs a float between 85-89, then the function should return a "G"/Good grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(89.999);

    //assert
    expect(grade).toBe("G");

  });
  
  it('When user inputs a float between 80-84, then the function should return an "S"/Satisfactory grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(82.293);

    //assert
    expect(grade).toBe("S");

  });
  
  it('When user inputs a float between 75-79, then the function should return an "N"/Needs Improvement grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(76.21);

    //assert
    expect(grade).toBe("N");

  });
  
  it('When user inputs a float 74.99 and below, then the function should return an "D"/Did Not Meet Expectation grade', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(73.21);

    //assert
    expect(grade).toBe("D");

  });
  
  it('When user inputs a string, then the function should return an error message', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier("95");

    //assert
    expect(grade).toBe("Cannot be non-integer");

  });

  it('When user inputs an empty space, then the function should return an error message', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(" ");

    //assert
    expect(grade).toBe("Cannot be non-integer");

  });


  it('When user inputs a character, then the function should return an error message', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier("A");

    //assert
    expect(grade).toBe("Cannot be non-integer");

  });

  it('When user inputs a unique character, then the function should return an error message', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier("`");

    //assert
    expect(grade).toBe("Cannot be non-integer");

  });

  it('When user inputs nothing, then the function should return an error message', () => {
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier();

    //assert
    expect(grade).toBe("Cannot be null");
  });
  
  it('When user inputs a negative number, then the function should return an error message', ()=>{
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(-1);

    //assert
    expect(grade).toBe("Cannot be negative");
    
  });
  it('When user inputs a number above 100, then the function should return an error message', ()=>{
    //arrange
    var grade;
    
    //act
    grade = gradeClassifier(100.1);

    //assert
    expect(grade).toBe("Exceeded grade limit");
    
  });
});
