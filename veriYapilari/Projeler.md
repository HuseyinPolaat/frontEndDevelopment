# PROJE 1
## 1. Sorunun Cevabı
[22,27,16,2,18,6] n
[2,27,16,22,18,6] n - 1
[2,6,16,22,18,27] n - 2
[2,6,16,18,22,27] 1

## 2.Sorunun Cevabı 
n * (n + 1) = n^2 + n kadardır.
buradan da big(O) = n^2 bulunur.

## 3. Sorunun Cevabı 
Best case dizinin doğrudan büyükten küçüğe sıralanmış olarak verilmiş olma senaryosudur. 
Average case dizinin büyükten küçüğe sıralanmış olma senaryosudur. 
Worst case ise dizinin elemanlarının sıralanmadan rastgele dağıtılmış olma senaryosudur. 

## 4. Sorunun Cevabı 
Dizinin sıralanmış hali: [2,6,16,18,22,27] 
Dizi sıralandığı için tüm elemanlar best case kapsamındadır.

### [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

1. [7,3,5,8,2,9,4,15,6]
2. [2,7,5,8,3,9,4,15,6]
3. [2,3,5,8,7,9,4,15,6]
4. [2,3,4,8,7,9,5,15,6]


# PROJE 2

## 1. Sorunun Cevabı

1. [16,21,11,8,12,22]

2. [16,21,11]   [8,12,22]

3. [16]   [21,11]   [8,12]   [22]

4. [16]   [11,21]   [8,12]   [22]

5. [11,16,21]   [8,12,22]

6. [8,11,12,16,21,22]


## 2. Sorunun Cevabı

1. Tüm gruplamalar yapıldıktan sonra tüm elemanlar tek tek ele alınacağı için her bir aşama için big(O) = n dir.
2. Bu aşamalardaki işlemler her seferinde yarı yarıya düşer buradan 2^x = n diyebiliriz. 
3. Tüm süreç için big(O) 2^x = n => logn = x olur. 
4. Her aşamada n kadar iş yapıldığından big(O) = n * logn olur



# PROJE 3

1. [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] root: 7


                            7
                           / \     
                          5   8
                        / \    \
                       1   6    9
                      / \   
                     0   3
                        /  \
                       2    4    



