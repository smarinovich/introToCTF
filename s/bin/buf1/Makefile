# stolen from 6841 challenges
.PHONY = all clean

CC = gcc
COMPILE_FLAGS = -g -O0 -fno-stack-protector -no-pie # -m32
	# -g: default level of debug information
	# -O0: do not optimise (Optimisation level 0)
	# -fno-stack-protector: disable stack protectors (canaries(?))
	# -no-pie: disable position independent execution - disables relative paths for addresses
	# -m32: compile as a 32 bit program

all: 1_adminOverflow
apple: 1_adminOverflow_apple


1_adminOverflow:
	${CC} ${COMPILE_FLAGS} -m32 -o ./buf1 buf1.c


1_adminOverflow_apple:
	${CC} ${COMPILE_FLAGS} -o ./buf1 buf1.c


clean:
	rm -rf ./buf1 ./buf1.dSYM
