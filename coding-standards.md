## ShelterBuddy Coding Standards

1. Document Conventions 
2. Definitions
3. C# Standards
   1. Naming Conventions
   2. Design Rules
   3. General Rules
      1. Enums, Properties, Fields & Variables
      2. Classes & Interfaces
      3. Object Construction
      4. Methods
      5. Validation
      6. Exceptions
      7. Linq
      8. Return Types
      9. Events, Delegates & Threading
      10. Attributes
      11. Unit/Integration Testing
      12. Comments
      13. API
4. Html & Cascading Style Sheets
   1. Design Rules
5. JavaScript
   1. Naming Convention
   2. Design Rules
6. Web components
   1. Background
   2. Rules
   3. Updating a component
   4. Example screenshot of layout in practice
7. React/Redux/Typescript 
   1. Project Structure
   2. Naming Convention
   3. Testing
   4. Design Rules

### Document Conventions
Below are standard conventions used throughout this document.

* **Always/Shall/Must** - This rule must be enforced, no exception
* **Never/Do Not** - This action must not happen, no exception
* **Avoid** - This action should not happen unless exceptional circumstances prevent it
* **Try/Should** - This rule should be used wherever possible (and applicable)

### Definitions
* **Access Modifier** - C# keywords public, protected, internal and private which declare the visibility of types and members.
* **Identifier** - A developer defined token used to uniquely name a declared object or object instance, e.g. public class MyClassNameIdentifier { ... }.
* **Camel Case** - A word with the first letter lower case and first letter of each subsequent word-part capitalised, e.g. camelCaseExample.
* **Pascal Case** - A word with the first letter capitalized, and the first letter of each subsequent word-part capitalized, e.g. PascalCaseExample.
* **Upper Case** - All characters are capitalized, e.g. SHELTERBUDDY.
* **Lower case** -All characters are lower cased, e.g. shelterbuddy.

### C# Standards
#### Naming Conventions
* Use US English spelling for code


* "P" = Pascal Case Identifier
* "c" = Camel Case Identifier
* "X" = Not Applicable

|Identifier|Public|Protected|Internal|Private|Example| Notes |
|---|---|---|---|---|---|-------|
|Project File|P|x|x|x| |Should match Assembly & Namespace|
|Source File|P|X|X|X|EFRepository.cs|Should match the contained class name|
|Other Files|P|X|X|X|||
|Namespace|P|X|X|X||Partial Project / Assembly match|
|Class|P|P|P|P|EFRepository||
|Generic Class|P|P|P|P|Stack<T>|Use "T", then "k" as type identifiers|
|Struct|P|P|P|P|Point||
|Interface|IP|IP|IP|IP|IRepository|Always prefix with "I"|
|Method|P|P|P|P|PopulatePage()|Use a Verb or Verb-Object pair.|
|Property|P|P|P|P|Password|Never prefix with "Get" or "Set"|
|Field|X|X|X|c|animal||
|Constant|P|P|P|c|||
|Static Field|P|P|P|c|||
|Enum|P|P|P|P|Day||
|Delegate|P|P|P|P|||
|Inline variable|X|X|X|c|userName||
|Parameter|X|X|X|c|userName||

#### Design Rules
##### General Rules
1. Source file must only contain one Namespace and should only contain one class.
2. Namespaces should be structured like ShelterBuddy.[Product].[Component]
```
//correct
public namespace ShelterBuddy.Public.Web
public namespace ShelterBuddy.Public.ApplicationServices


//Incorrect
public namespace Public.Web
```
3. Place namespace using statements at the top of the file.
4. Group namespaces into logic groups, with .Net namespaces first.
5. Always use tabs of 4 spaces when indenting code, never use the tab character.
6. Always place curly braces { } on new lines

```
// Bad
if () {
}

// Good
if ()
{
}
```
7. Open and closed curly braces must align.
8. Must use only Pascal or camel case. Never use Hungarian notation.
9. Never declare more than one variable per line.
10. For readability, try to keep lines limited in length such that they will reasonably fit within the Visual Studio editor on a standard 1920px wide screen.
    1. Going over is ok if there is no clear break - but if it does go over due to no clear break then you need to consider if that line/method/variable is doing too much and needs to be broken up.
11. Try not to use abbreviations unless the full name is excessive.
    1. Try to use abbreviations which are widely known and accepted.
12. Avoid abbreviations longer than 5 chrctrs.
13. Always upper case abbreviations that 2 characters, unless the abbreviation is either Id or Db which are exceptions. Longer abbreviations default back to Pascal case.
```
// Bad
ShelterBuddy.Common.SSL
ShelterBuddy.Common.Ip

// Good
ShelterBuddy.Common.IO
ShelterBuddy.Common.Http
ShelterBuddy.Common.Ftp
```
14. Try avoid complex conditions when using a ternary operator.
15. Always use built-in C# types over .Net CTS types, e.g. use int not int32.
16. Avoid explicit casing, use as operator instead.
17. Always check for null after using as.
```
var userToInvoice = userFromService as User;
if(userToInvoice == null)
{
//deal with type mismatch
}
```
18. Always when converting from a string to primitive type, use the primitive types TryParse.
19. Always when converting from an object to a primitive type, use is to check the type and assign to a variable of that type.
```
if (invoiceNumberObject is int invoiceNumber){
// do stuff with invoiceNumber
}
else
{
// deal with type mismatch
}
```
20. Always surround operators such as =, +=, ==, >=, ||, and && or etc  with a single space on each side of the start/end smybol.
```
// Bad

if(firstCondition&&secondCondition) {}
if(firstCondition&& secondCondition) {}

// Good
if(firstCondition && secondCondition) {}
```
21. Always place ++ and -- operators against the identifier without a space.
```
// Bad
counter ++;
-- seed;

// Good
counter++;
--seed;
```
22. Never use the goto statements!
23. Never use #region or #endregion preprocessor directives.
24. Always when using commas, place it against the previous symbol without a space then followed by a single space.
```
// Bad
Console.WriteLine(@"Hello {0}!" , helloMessage);
Console.WriteLine(@"Hello {0} {1}!" , helloMessage   ,    "Something else");

// Good
Console.WriteLine(@"Hello {0}!", helloMessage);
```
25. Try to always make code easy to read by using whitespace to your advantage.
26. Always try avoid inline comments, unless absolutely required. If your code does not read well, refactor or rethink the approach.
27. Avoid adding redundant or meaningless prefixes and suffixes to identifiers.
```
// Bad
public enum ColourEnum {}
public class VehicleClass {}
```
28. Refactor often.
29. In multi-line statements that use null conditional operators put the ? on the same line as the object. E.g.
```
// Bad
var activePersons = persons
   ?.Where(p => p.IsActive)
   .ToList();

// Good
var activePersons = persons?
   .Where(p => p.IsActive)
   .ToList();
```
30. Try to use local functions when appropriate (e.g. a private method that is only called from one other method). Always add local functions to the end of the scope to where they apply (after any return statements), e.g.
```
// Bad
public string Foo()
{
    if (IsBar())
    ...
    return "foo";
}

private bool IsBar() { ... }

// Good
public string Foo()
{
    if (IsBar())
    ...
    return "foo";

    bool IsBar() { ... }
}

// Bad
public void Foo()
{
    foreach (var bar in foo)
    {
        if (IsBar(bar))
        ...
    }
}

private bool IsBar(...) { ... }

// Good
public void Foo()
{
    foreach (var bar in foo)
    {
        if (IsBar(bar))
        ....
        bool IsBar(...) { ... }
    }
}
```
##### Enums, Properties, Fields & Variables
1. Try to prefix Booleans variables and properties with "Can", "Is", "Should", or "Has". These auxiliary verbs can be substituted for another verb if it makes the code more readable, e.g. "Include", "Allow".
2. Always word Booleans in an affirmative manner, "CanSeek" instead of "CantSeek".
3. Never use explicit Boolean tests.
```
// Bad
if (isValid == true)

// Good
if (isValid)
Never call assign values inside a condition statement.

// Bad
string a = null;
if ((a = SomeMethod()) != null)
{

}

// Good
var a = SomeMethod();
if(a != null)
{
}
```
4. Always use var instead of explicitly declaring the variable type.
5. Always use Null-conditional operator.
```
// Bad
String cityName = null;
if (person.Address != null && person.Address.City != null)
{
    var cityName = person.Address.City.Name;
}

// Good
var cityName = person?.Address?.City.Name;
```
6. Always treat static and constant variable like standard fields.
7. Always use const only for natural constants, e.g. the number of days in a week.
8. Avoid using constants on read only variables, use readonly instead.
```
// Bad
private const IRepository repository = new AnimalRepository();

// Good
private readonly IRepository repository = new AnimalRepository();
```
9. Always use string.Empty, never use "".
10. Always use string.IsNullOrEmpty or string.IsNullOrWhiteSpace to check for empty strings.
11. Avoid string concatenation (+), use string interpolation for simple concatenations, otherwise use StringBuilder.
12. Avoid use of string.format, use string interpolation.
```
// Bad
return string.format("{0} {1} {2} {3} {4}", var1, var2, var3, var4, var5);

// Good
return $"{var1} {var2} {var3} {var4} {var5}";
```
13. Never use string for names of variables properties, fields or variables, use the nameof expression.
```
// Bad
throw new ArgumentNullExpection("TheNullArgument");

// Good
throw new ArgumentNullExpection(nameof(TheNullArgument));
```
14. Never prefix a property with get or set.
15. Never include the parent class name within a property.
```
// Bad
public class Person
{
    public string PersonName { get; set; }
}

// Good
public class Person
{
    public string Name { get; set; }
}
```
16. Always use auto properties, when properties have no additional logic.
```
// Bad
public string Password
{
    get
    {
        return password;
    }
    set
    {
        password = value;
    }
}

// Good
public string Name { get; set; }

public string Password
{
    get
    {
        return password;
    }
    set
    {
        Salt = GenerateNewSalt();
        password = GeneratePassword(Salt, value);
    }
}
```
17. Always use for auto-properties initializers.
```
// Bad
public class Customer
{
    public string First { get; set; };
    public string Last { get; set; };

    public Customer 
    {
        First = "Jane";
        Last = "Doe";
    }
}

// Good
public class Customer
{
    public string First { get; set; } = "Jane";
    public string Last { get; set; } = "Doe";
}
```
18. Never use property with backing field for readonly properties. Use property with getter-only and auto-property initialiser.
```
// Bad
public class Customer
{
    private string first;
    public string First
    {
        get
        {
            return first;
        }
    }

    public Customer
    {
        first = "Jane";
    }
}

// Good
public class Customer
{
    public string First { get; } = "Jane";
}
```
19. Always use expression bodied properties for simple getter properties.
```
// Bad
public string Password
{
    get
    {
        return Rng9999(password, passwordSalt, secretSauce, BbqSource);
    }
}

// Good
public string Password => Rng9999(password, passwordSalt, secretSauce, BbqSource);
```
20. Always end an enum naming chain with a plural word.
```
// Bad
public enum Car { }
public enum FrontLoaderWashingPoweredBrand { }

// Good
public enum Cars {}
public enum FrontLoaderWashingPoweredBrands { }
```
21. Fields must always be private. Where simple "Accessor" and "Mutator" functionality is required, a property should be used. However, when the logic is complex, either because a of long routine or the use of parameters, the use of method is advised.

##### Classes & Interfaces
1. Always avoid class files with more than 500 lines of code.
2. Always make the name of a class singular.
3. Try to use generics, where possible. This prevents the need to cast and provides type safety.
4. Always group class internals in the following order:
   1. Nested Enums, Structs and Classes (Public, Internal)
   2. Member variables
   3. Properties
   4. Constructors, Finalizers, and Static Factory Method (where used).
   5. Methods
   6. Nested Enums, Structs and Classes (Private, Protected)
5. Always order sequential declarations within a group, as described above, in the following access modifier order:
   1. public
   2. internal
   3. protected
   4. private
6. Always use appropriate suffix when subclassing another type, where possible. For example, we know button is a kind of control, there for control would not appear in the name
7. Try to include the design-pattern names such as "Repository", "Factory" or "Provider" as a suffix, where appropriate.
8. Never declare a member variable as public! The preferred method is to use a property or explicitly define an accessor function.
9. Never shadow a function, unless unavoidable. Shadowing does not support polymorphism.
```
// Bad
public class BaseClass
{
    public void Test()
    {
    }
}
public class DerivedClass : BaseClass
{
    // Does not override base class functionality
    public new void Test()
    {
    }
}

// Good
public class BaseClass
{
    public virtual void Test()
    {
    }
}
public class DerivedClass : BaseClass
{
    // Override base class functionality
    public override void Test()
    {
    }
}
```
10. Always call the base method of an override.

```
// Bad
public class BaseClass
{
    // Overridden method does not get called
    public virtual void Test()
    {
    }
}

public class DerivedClass : BaseClass
{
    // Override base class functionality
    public override void Test()
    {
        // some method logic
    }
}

// Good
public class BaseClass
{
    public virtual void Test()
    {
        // some method logic
    }
}

public class DerivedClass : BaseClass
{
    // Override base class functionality
    public override void Test()
    {
        base.Test();
        // some method logic
    }
}
```
11. Always set an Access Modifier on classes.
12. Always prefix interfaces with an "I".
13. Always prefer programming to an interface, not an implementation, where possible.
14. Never suffix a base class with "Base", if appropriate. Prefix it with "Base".
15. Avoid anaemic interfaces. Interfaces that are small and have no real purpose.
16. Prefer records over classes for data transfer objects where appropriate. 
##### Object Construction
1. Prefer constructors over static factory methods unless logic is needed for object creation (such as returning from cache, e.g. Singleton or returning a specific subclass)
##### Methods
1. Avoid methods with more than 200 lines or complex methods.
2. Avoid methods with more than 5 arguments. Consider a single argument (Class/Struct) which contains the parameters.
3. Avoid using params, use overloaded methods instead.
4. Never use this, unless required.
5. Methods that return a single object should be named as a singular.
```
public Client GetClientById(int clientId);
```
6. Methods that return multiple objects should be named as a plural.
```
public List<Client> ListClients();
Try to use expression bodied methods for simple methods.

// Bad
public Point Move(int dx, int dy)
{
    return new Point(x + dx, y + dy);
}

// Good
public Point Move(int dx, int dy) => new Point(x + dx, y + dy);
```
7. Avoid creating methods with boolean parameters. When calling methods that have boolean parameters, always name the argument
```
// Bad
Foo(bar, true); // what is true?

// Good
Foo(bar, areBooleanParametersBad: true);
```
8. When calling methods with arguments where the value is not obvious, or is null/default then always include the name of the argument (values that are not obvious might be strings or ints where the value may not be obvious - although, in this case you may want to consider putting the value into a constant, as this may make the argument more obvious).
```
// Bad
MyMethod("Cheese", 5); // what is "Cheese" and 5?

// Good
MyMethod(description: "Cheese", age: 5);

// Good
var description = GetDescription(); // or some other code that sets the description into a variable
var age = GetAge(); // or some other code that sets the age into a variable
MyMethod(description, age);

// Better
const string cheeseDescription = "Cheese";
const int cheeseAge = 5;
MyMethod(cheeseDescription, cheeseAge);

// Example method
public void MyMethod(string description, int age) ...
```
##### Validation
1. Always validate public method arguments.
2. Always use generic .net checking over precondition, this is for simplicity/performance as precondition uses expressions and is fairly complex.
```
// Bad
public void Method(ClassA a)
{
    Check.PreCondition(a);
}

public ClassA (Class b)
{
    Check.PreCondition(b);
    this.b = b;
}

public GetPerson (personId)
{
    Check.PreCondition(personId >= 1);
}

// Good
public void Method(ClassA a)
{
    _ = a ?? throw new ArgumentNullException(nameof(a));
}

public ClassA (Class b)
{
    this.b = b?? throw new ArgumentNullException(nameof(b));
}

public GetPerson (personId)
{
    if (personId < 1)
        throw new ArgumentException($"{nameof(personId)} must be greater than 0", nameof(personId));
}
```
##### Exceptions
1. Never use try/catch for flow control.
2. Avoid nesting try/catch within a catch block.
3. Always catch exceptions you can handle.
4. Always order exceptions from most derived to least derived exception type.
5. Avoid re-throwing an exception. Allow it to bubble-up instead.
6. Try use exception filters to avoid re-throwing.
```
// Bad
try
{

}
catch (MyException e)
{
if (!e.blah) {
    throw e;
}

    // handle logic
}

// Good
try
{


}
catch (MyException e) when (e.blah)
{
    // handle logic
}
```
7. Always when re-throwing an exception, call throw not throw exception.  Using throw exception resets the stack trace, where as throw does not. The exception to this rule is when you are wrapping the exception in a derived exception.
8. Always use validation to avoid exceptions.
```
// Good
if(connection.State != ConnectionState.Closed)
{
    connection.Close();
}
```
##### Linq
1. Always keep linq chains (extension methods) or query syntax readable.
2. Try, where the linq is simple, to use linq chains .
3. Try, where the linq is complex especially where containing joins, to use the query syntax.
4. Try to use meaningful names for expression parameters. In appropriate situations, e.g. boiler plate EF configuration, a single character is sufficient.
```
// Bad
var employeesByPay = employees.OrderBy(x => x.Salary);
var employeesByPay = employees.OrderBy(e => e.Salary);
Property(property => property.Id).HasColumnName("AnimalId");

// Good
var employeesByPay = employees.OrderBy(employee => employee.Salary);
Property(p => p.Id).HasColumnName("AnimalId");
```
5. Try for complex expressions, to use a well named variable.
```
var animalOwners = owners.Join(animals,
    owner => owner.Id,
    animal => animal.Owner.Id,
    (owner, animal) => new
    {
        OwnerId = owner.Id,
        AnimalId = animal.Id
    });
```
6. Always use discards for unused function variables. This communicates that the value is intended to be ignored, and also has benefits in terms of memory allocation at runtime
```
// Bad
cache.AddOrUpdate(cacheId, cacheResult, (k, v) => cacheResult);

// Good
cache.AddOrUpdate(cacheId, cacheResult, (_, _) => cacheResult);
(_, _, area) = city.GetCityInformation(cityName);
if (DateTime.TryParse(dateString, out _))
```
7. Always rename properties when the property name in the result would be ambiguous.
```
var animalOwners = owners.Join(animals,
    owner => owner.Id,
    animal => animal.Owner.Id,
    (owner, animal) => new
    {
        OwnerId = owner.Id,
        Animal = animal
    });
```
8. Always align clauses under the from clause, as seen in the previous example.
9. Always use the where clause before other query clauses. This will make sure later query clauses will only apply to the filtered set of data.
```
var employees = users.Where(u => u.IsEmployee)
        .OrderBy(u => u.FirstName)
        .ToList();
```
##### Return Types
1. Always return a IResponse or inheritor of IResponse from any service method.
2. Always, when a service method returns a collection, return a paged collection from the Service layer (IResponse<IPagedList<T>>).
3. Always, when returning a collection type from the Repository layer, return a IPagedList<T>. If there are valid reasons not to page the result, the return must be either an ICollection<T> or an IList<T>. However in such case, the use of an IList<T> is only in a situation where the data is explicitly ordered.
```
// Bad - no ordering is used.
public IList<Item> GetItems(int parentId)
{
    return context.Set<Item>().AsQueryable().Where(i => i.ParentId == parentId).ToList();
}

// Good - ordering is used.
public IList<Item> GetItems(int parentId)
{
    return context.Set<Item>().AsQueryable().Where(i => i.ParentId == parentId).OrderBy(i => i.Name).ToList();
}

// Good- no ordering is used.
public ICollection<Item> GetItems(int parentId)
{
    return context.Set<Item>().AsQueryable().Where(i => i.ParentId == parentId).ToArray();
}
```
##### Events, Delegates & Threading
1. Always check event and delegate instances for null before invoking.
2. Always derive custom EventArgs class to provide additional data.
3. Always use the lock keyword instead of the Monitor type.
4. Always lock on a private or private static field.
5. Where possible make the lock object readonly.
6. Where possible name the lock field _objectLock.

##### Attributes
1. Always for the decision of laying out attributes, when choosing between one per line or all on a single line, the choice should be the most readable option. For instance, if placing attributes in a single line manner is more readable than the multiple line variant, then it should be chosen over the latter. However, if the former is not true, then the latter of one attribute per line should be used.

Per line usage
```
// Bad
[TestCase("test.html", "http://localhost", "http://localhost/test.html"), TestCase("/test.html", "http://localhost", "http://localhost/test.html"), TestCase("~/test.html", "http://localhost", "http://localhost/test.html"), TestCase("test.html", "http://localhost:81", "http://localhost:81/test.html"), TestCase("/test.html", "http://localhost:81", "http://localhost:81/test.html"), ExpectedException(typeof(InvalidOperationException))]
public void ToAbsoluteUriOverload_WhenCalled_ReturnExpectedResult(string relativeUrl, string siteUrl, string expectedResult)
{
    // ...
}

// Good
[TestCase("test.html", "http://localhost", "http://localhost/test.html")]
[TestCase("/test.html", "http://localhost", "http://localhost/test.html")]
[TestCase("~/test.html", "http://localhost", "http://localhost/test.html")]
[TestCase("test.html", "http://localhost:81", "http://localhost:81/test.html")]
[TestCase("/test.html", "http://localhost:81", "http://localhost:81/test.html")]
[ExpectedException(typeof(InvalidOperationException))]
public void ToAbsoluteUriOverload_WhenCalled_ReturnExpectedResult(string relativeUrl, string siteUrl, string expectedResult)
{
// ...
}

[HttpGet, HttpPost]
public IEnumerable<KeyValuePair<int, VolunteerNoShowIconModel>> GetByVolunteerIds(int[] volunteerIds)
{
// ...
}
```
##### Unit/Integration Testing
1. Always categorise tests which interact with the database as "Database"
```
[Test,Category("Database")]
public void DatabaseTestName()
{
...
}
```
2. Always categorise tests which interact with external systems as "Integration"
```
[Test, Category("Integration")]
public void IntegrationTestName()
{
...
}
```
3. Always follow the naming standard "ClassGettingTestedTests" when creating a test class.
```
[TestFixture]
public class AnimalServiceTests
{
...
}
```
4. Always follow the naming convention "MethodNameOrProperty_StateUnderTest_ExpectBehaviour" when creating a unit test.
5. Always use UnderNormalConditions when a unit test has no specific StateUnderTest.
6. Try to end a test with IsValid when the expected behaviour is not significant.
```
Sample unit test method names
[Test]
public void GetHumanByName_GivenAnExistingHumanName_IsValid()
{
...
}

[Test]
[TestCase(null, ExpectedException = typeof(ArgumentException))]
[TestCase("", ExpectedException = typeof(ArgumentException))]
public void GetHumanByName_GivenInvalidArguemnts_Throws(string name)
{
...
}

[Test]
public void GetHumanBySex_GivenASexTypeOfMale_IsValid()
{
...
}

[Test]
public void GetHumanBySex_NotHavingAnyHumnas_IsValid()
{
...
}

[Test]
public void DoThePersonSave_UnderNormalConditions_IsValid()
{
...
}

[Test]
[TestCase(null)]
[TestCase("")]
public void Validate_HavingAnInvalidName_IsValid(string name)
{
...
}

[Test]
[TestCase(null, true)]
[TestCase("* * * * *", true)]
[TestCase("*", false)]
public void Validate_HavingACronExpressionOfTheTestCase_IsEitherValidOrInvalid(string expression, bool isValid)
{
...
}

[Test]
public void IsActive_InADefaultState_IsValid()
{
...
}


[Test]
public void IsActive_InADisabledState_IsValid()
{
...
}
When testing a class constructor; replace "MethodNameOrProperty" with "Constructor".

[Test]
public void Constructor_GivenValidArguments_DoesNotThrow()  { ... }

[Test]
public void Constructor_GivenInvalidArguments_Throws() { ... }
```
7. Try to make all tests atomic, e.g. if you insert something into a database, make sure you delete it when you are done.
8. Try to make all tests resilient to fails in between test runs. e.g. if you stop debugging or the CI server fails, the unit will work on the second run.
9. Always, when using the file system, use the "**TestContext.CurrentContext.TestDirectory**" to specific your path.
10. Always order methods in unit tests by the following:
    1. Test Fixture Set up
    2. Test Set Up
    3. Test Tear Down
    4. Test Fixture Tear down
    5. Unit Tests
11. Always name the Test Fixture Set Up method as "Initialise".
12. Always name the Test Fixture Tear Down method as "Dispose".
13. Always name the Test Set Up method as "SetUp".
14. Always name the Test Tear Down method as "TearDown".
```
[TestFixtureSetUp]
public void Initialise()
{
}

[SetUp]
public void SetUp()
{
}

[TearDown]
public void TearDown()
{
}

[TestFixtureTearDown]
public void Dispose()
{
}
```
12. Always use Shouldy assertions (not NUnit Assert).
```
//Correct
result.Name.ShouldBe("Test");
Should.Throw<ArgumentNullException>(() => result.ToString());

//Incorrect
Assert.AreEqual(result, 10);
Assert.Throws<ArgumentNullExcpetion>(result.ToString());
```
13. Try to arranged a unit test with:
* Arrange - Set up your expectations.
* Act - Execute your code.
* Assert - Verify your expectations, n.b. NUnit Assertions should always appear before Moq verifications.
14. Always locate a unit test in the unit test project at a namespace which does reflect the tested code's namespace in the corresponding project. For instance, Main.Web.UI.Api.v1.Mapping will be located at ShelterBuddy.Tests.Web.UI.Api.v1 in the test project. We consider in this case "Web" to be the root/start.
15. The exception to this rule is integration tests. Such tests start at Integration and not at ShelterBuddy.Tests.{corresponding project name}.

|Project|Source code location|Test source code location|
|---|---|---|
|ShelterManagement.Public.Core|ShelterManagement.Public.Core.Domain.Animal|ShelterManagement.Public.Tests.Core.Domain.Animal|
|ShelterManagement.Public.Web|ShelterManagement.Public.Web.Api.v1.Animal.AnimalBreedsController|ShelterManagement.Public.Tests.Web.Api.v1.Animal.AnimalBreedsController|
|ShelterManagement.Public.Web|ShelterManagement.Public.Web.Api.v1.Animal.AnimalBreedsController|ShelterManagement.Public.Tests.Web.Integration.Api.v1.Animal.AnimalBreedsController|
16. Preferring mocking framework: NSubstitute
    1. Developers are encouraged to "clean as they go" converting mocks over to NSubstitute where practical.
17. Preferred assertion framework: Shouldly
    1. Developers are encouraged to "clean as they go" converting assertions over to use Shouldly where practical.
18. Only use snapshot testing when it is impractical to use individual assertions to perform the same test.
    1. Use it for:
       1. Object response where the object has lots of properties (e.g. for integration tests)
    2. Don’t use it for:
       1. Small objects that can have it’s properties asserted on in a few lines of code
       
**Unit tests must be written for:**
* Mapping classes (entity to view model)
* Ordering classes (eg. Service Executor)
* Specification classes (eg. Service Executor)

**Intergration tests are required for:**
* API controllers
* New features/functionality as a whole
* Test the process of the new feature
* Test the security of the new feature (eg. Readonly access vs full access, vs no access)

**Special case and solution tests:**
* Should be written to prevent human error
  * Prevent developer from copying bad chars (shouldn't be copying but it happens)
  * Adhere to naming conventions

**Comments**
1. Only write code comments where necessary, as they should be document something a developer should read when present. (**Important**)
2. Never write obvious code comments for the sake of having a comment. (**Important**)
3. Always write comments in the same language, be grammatically correct, and contain appropriate punctuation.
4. Always use // or /// but never / ... /. 3.
5. Never use flower box comments.
```
//**************
// Comment Block
//**************
/*****************
* Comment Block *
  *****************/
```
6. Always indented comments to the same level of code.
7. Always include a space between // and the actual comment.
8. Avoid inline comments, only use them to explain assumptions, known issues, and algorithm insights.
9. Try to include Task-List keyword flags to allow comment-filtering.
```
// TODO: Place database code here
// UNDONE: Removed P\Invoke call due to errors
// HACK: Temporary fix until I can later refactor
```
10. Only use C# comment blocks (<summary> tags) for documenting the REST API models for fields whose naming is confusing or has the potential to be misinterpreted.
    1. Clean up "Sets or gets <field name>" and tags that provide no useful information
       1. If you can give it an accurate summary, then update it.
       2. If you are not sure, ask the team for a summary or remove it.
11. Where possible, use GraphQL descriptions for documenting the GraphQL API
12. A comment should never be followed by a blank line

**API**
1. In GraphQL, return dates as LocalDateTime or LocalDate, not UTC

## Html & Cascading Style Sheets
### Design Rules
1. Always use tabs of 4 spaces when indenting code, never use the tab character.
2. Always indent html code to empathise hierarchy and improve readability.
```
<body>
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
  </ul>
</body>
```
3. Always close tags.
4. Always use quotes with attribute. Eg `<input size="10">` not `<input size=10>`
5. Always use lower case for tag names and attributes.
6. Always include the alt attribute when using the img tag.
7. Avoid the frame, frameset and noframes tags.
8. Try use lower case with "-" word separators for identifiers and classes. The only exception to this, is when the identifier matches a C# property name, in this case the identifier should match C# naming standards.
```
<input id="person-name" class="large input-text"/>
```
9. Never use in line styles.
10. Always place external CSS files within the head tag.
11. Always put CSS style properties on their own line, unless it is a single property, which should be on one line.
```
.input-text-error { background-color: red; }

.input-text {
    background: red;
    border-right: 1px solid black;
    padding: 2em;
}
```
12. Alphabetize CSS style properties.
13. Avoid duplicate style properties for similar tags and classes.
```
/* Bad */
h1{
    color: #222;
    font-size: 1em;
    margin: 1em 0 2em 0;
}
h2{
    color: #222;
    font-size: 1em;
    margin: 1em 0 2em 0;
}

/* Good */
h1, h2{
    color: #222;
    font-size: 1em;
    margin: 1em 0 2em 0;
}
```
14. Try to use em instead of px when specifying font size.
15. Never use html tags to style elements, use cascading style sheets.
```
<!-- Correct -->
<style> 
h1{ 
    font-style: italic; 
    text-decoration: underline;
}
</style>
<h1>Heading!</h1>

<!-- Incorrect -->
<h1>
    <u>
        <i>Heading!</i>
    </u>
</h1>
```
### JavaScript
#### Naming Convention
**Use US English spelling for code**
* "P" = Pascal Case Identifier
* "c" = Camel Case Identifier
* "l" = Lower case Identifier
* "U" = Upper case Identifier
* "X" = Not Applicable

|Identifier|Format|Exmaple|Notes|
|---|---|---|---|
|Source File|l|common.js|Should always be lower case to avoid case-sensitive platforms. Use "-" for spaces between words.|
|Namespace|l|shetlerbuddy.common||
|Functions|c|myFunctionName||
|Variables|c|myVariableName||
|Classes|P|MyClass||
|Constants|U|SECONDS_IN_A_MINUTE|Use underscore to separate word parts.|
|Enums|P|MyEnum||
|Methods|c|myMethodName||

#### Design Rules
1. Avoid using inline JavaScript.
2. Try to place external JavaScript files immediately before the closing body tag.
3. Always use strict equality checks === or !== instead of == or != if you know the expected type of the values on both sides of the comparison.
4. Always use tabs of 4 spaces when indenting code, never use the tab character.
5. Always use semicolons.
6. Try, when using block operators, e.g. if, else, for, while, try, to use braces and always use multiple lines.
```
// Bad
if(someCondition)
    callMethod();
if(anotherCondition) { callMethodA(); }

// Good
if(someCondition) {
    callMethod();
}
```
7. Always use double quotes for strings.
```
// Bad
const productName = 'Shelter Buddy';

// Good
const productName = "Shelter Buddy";
```
8. Try to use the join function instead of for loops for building a string.
```
// Bad
const myArray = ["item 1", "item 2", "item 3", ...];
let menu = "<ul>";
for(var i = 0; i < myArray.length; i++) {
    menu = menu + "<li>" + myArray[i] + "</li>";
}
menu = menu + "</ul>";

// Good
const myArray = ["item 1", "item 2", "item 3", ...];
let menu = "<ul><li>" + myArray.join("</li><li>") + "</li></ul>";
```
9. Never use the with operator.
```
// Bad
with (shelterBuddy.web.page) {
    title = "Home Page";
    debug = true;
}

// Good
shelterBuddy.web.page.title = "Home Page";
shelterBuddy.web.page.debug = true;
```
10. Always when creating objects, use {} instead of new Object().
```
// Bad
var options = new Object();
options.debug = true;
options.title = "Home Page";
options.toString = function() {
    console.log(this.title);
}

// Good
const options = {
    debug: true,    
    title: "Home Pag    e"
    toString: function() {
        console.log(this.title);
    }
};
```
11. Always when creating arrays, use [] instead of new Array().
```
// Bad
let myArray = new Array();
myArray[0] = "Item 1";
myArray[1] = "Item 2";

// Good
const myArray = ["Item 1", "Item 2"];
```
12. Always use the string variable as the condition when checking for null or empty.
```
// Bad
const myString = "shelter buddy";
if(myString !== null && myString !== "") {
    // the string is not null or empty.
}

// Good
const myString = "shelter buddy";
if(myString) {
    // this string is not null or empty
}
```
14. Always separate JavaScript behaviours into their own file.
```
<!-- Bad -->
<script lanaguage="javascript">
function fadeOut(){
    alert("Leaving the page");
}
</script>
<a href="home.aspx" onclick="fadeOut()">Click!</a>

<!-- Good -->
<!-- Html --> 
<a href="home.aspx" class="fade-out">Click!</a>

<!-- JavaScript --> 
$("a.fade-out").click(function(){
alert("Leaving the page");
});
```
15. Always when using jQuery, always chain your methods.
```
// Bad
$("#button").click(function(){
$("#label").methodOne();
$("#label").methodTwo();
$("#label").css("background-color", "red");
});

// Good
$("#button").click(function(){    
$("#label").methodOne()
    .methodTwo()
    .methodThree()
    .css("background-color", "red");
});
```
16. Always use `$.inArray(a, b) > - 1` to find whether the element a is in array b.
17. Always place opening braces on the same line.
```
// Bad
if ()
{
}

// Good
if () {
}
```
18. Always prefix dollar sign $ to Jquery collection references. For example: var $cameron = $("#cameron");
19. Try use native JavaScript over jQuery

### Web components
#### Background
* A web component is either something you download or create that is used directly one one or more view pages. For instance, both jquery and Tinymce are web components.
* Web components come in two forms. The first is one consists of multiple files and the second consists of a single file.

**Rules**
1. Web components are stored in /_share/Components.
2. If the component only works with another component, for instance bootstrap 3, it must be stored under the folder structure /_share/Components/Bootstrap/3/Components/MyComponent - so its working parent.
3. If the component works in isolation, for instance does not require bootstrap 3, it is stored under the folder structure /_share/Components/MyComponent - so on its own.
4. Try avoid versions. One version for all of the website.
5. If you must have versions, a single file component stores the version as part of the file name. Example /_share/Components/MyComponent/awesome1.0.1.js
6. If you must have versions, a multiple file component stores the version as a folder. Example /_share/Components/MyComponent/1/awesome.js. Example /_share/Components/Bootstrap/3/
7. Do not split a component up. Deleting a component or updating a component must start at a single root folder.

#### Updating a component
Although we try to avoid making direct edits to a component, sometimes edits are necessary. However, such actions lead to the likely problem of these edits being lost when updating a component. To minimise this issue we have a few rules concerning how to update a component.

1. Check via SVN/GIT this history of the component to see what edits, if any, have been made.
2. If required, update the new component to honour previous edits and test.

### React/Redux/Typescript
#### Project Structure
```
/src
    /domain (models, reducers, actions, epics)
    /infrastructure
    /routes (Folders under routes should be the same as actual routes used in the app)
    /shared (Shared UI components, models helpers)
```
#### Naming Convention
* Use US English spelling for code

#### Testing
1. Unit tests should be kept in the same directory as the file / component they are testing, not in a separate directory dedicated to test files.
2. Only use snapshot testing when it is impractical to use individual assertions to perform the same test.
   1. Use it for:
      1. A test that confirms the layout of a React components HTML (if you need more than one of these you probably should ask yourself if your component is “doing too much”)
   2. Don’t use it for:
      1. Small objects that can have it’s properties asserted on in a few lines of code
      2. Asserting that a single React component is included in the component under test
      3. Asserting that an inner React component has a particular property set
      
#### Design Rules
1. Avoid using constants (using arrow functions) for functions.
```
// Bad
const foo = (value: string) => {
    // do things
};

// Good
function foo(value: string) {
    // do things
}
```
2. Local functions must appear after the return statement.
3. GraphQL queries should not be inline, rather they should be extracted as a constant and placed at the end of the file.  This makes them easier to locate and avoids them breaking up the other code in the file.
4. Avoid using the method shorthand syntax for declaring methods/functions on interfaces because it causes less strict type checking (particularly with generics) as described here.
```
// Bad
interface IFoo {
    bar(): void;
}

// Good
interface IFoo {
    bar: () => void;
}
```