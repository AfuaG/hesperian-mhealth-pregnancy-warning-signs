CONFIGURATION=Release
APPLICATION_NAME=Safe-Pregnancy-and-Birth
RELEASE_BUILDDIR= ./build/Release-iphoneos
DEVELOPER_NAME=Matthew Litwin (763465CPK9)
PROVISONING_PROFILE=HesperianMobileTest.mobileprovision
PWD=$(shell pwd)


.PHONY: testbuild ipa

all: testbuild

testbuild:
	xcodebuild -configuration "$(CONFIGURATION)" build
	 /usr/bin/xcrun -sdk iphoneos PackageApplication -v "$(RELEASE_BUILDDIR)/$(APPLICATION_NAME).app" -o "$(PWD)/$(APPLICATION_NAME).ipa" --sign "$(DEVELOPER_NAME)" --embed "$(PROVISONING_PROFILE)"
	@echo "Created $(APPLICATION_NAME).ipa"

clean:
	rm -r build/ "$(APPLICATION_NAME).ipa"