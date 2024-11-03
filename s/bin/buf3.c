#include "flag.c"
#include <stdio.h>

#define FALSE 0
#define TRUE 1

int main(void) {
    int admin = FALSE;
    char buffer[16];
    printf("Enter the password: ");
    fgets(&buffer, 20, stdin);
    if (admin == TRUE) {
        printf("Welcome!\nYour flag is: ");
        printFlag();
    } else {
        printf("Incorrect password!\n");
    }
    return 0;

}