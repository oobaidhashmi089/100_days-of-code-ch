#include <iostream>
using namespace std;

int main() 
{
 int n;
 bool is_prime =true;

 cout << "number?:";
 cin>>n;
  if (n == 0 || n == 1) 
  {
    cout << "0 or 1 is not a prime number";
  }
  
  for (int i=2; i<=n-1;i++)
  {
      if (n%i==0)
      {
          is_prime=false;
          
      }
    
  }
  if (is_prime==true)
  cout<<"is prime";
  else
  cout<<"is not prime";
  
    return 0;
}
