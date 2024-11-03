#include "flag.c"
#include <stdio.h>

#define FALSE 0
#define TRUE 1

int main(void) {
    int admin = FALSE;
    int canary = 0xdeadbeef;
    char buffer[16];
    printf("Enter the password: ");
    fgets(&buffer, 24, stdin);
    if (admin == TRUE) {
        if (canary == 0xdeadbeef) {
            printf("Welcome!\nYour flag is: ");
            printFlag();
        } else {
            printf("Bro cheated 😡");
        }
    } else {
        printf("Incorrect password!\n");
    }
    return 0;

}