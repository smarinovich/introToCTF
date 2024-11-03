#include "flag2.c"
#include <stdio.h>

#define FALSE -1

int main(void) {
    int admin = FALSE;
    char buffer[16];
    printf("Enter the password: ");
    fgets(&buffer, 17, stdin);
    if (admin != 0) {
        printf("Welcome!\nYour flag is: ");
        printFlag();
    } else {
        printf("Incorrect password!\n");
    }
    return 0;

}