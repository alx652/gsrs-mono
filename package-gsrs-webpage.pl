#!usr/bin/perl

use strict;
use warnings;
use File::Next;
use Archive::Zip qw( :ERROR_CODES :CONSTANTS );

chdir('../gsrs-webpage') or die "$!";
my $zip = Archive::Zip->new();
my $iterator = File::Next::files( '.' );
my @files;
while ( defined ( my $file = $iterator->() ) ) {
   if ( !($file=~ /^(downloads|assets\/downloads\/dump|\.git|\.github)/)) {
       $zip->addFile( $file) if (! -d $file);
   }
}
unless ( $zip->writeToFileNamed('../temp.zip') == AZ_OK ) {
    die 'write error';
}

