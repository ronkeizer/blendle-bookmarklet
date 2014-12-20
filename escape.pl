# adapted from: https://gist.github.com/tantalor/1259477
# and: http://daringfireball.net/2007/03/javascript_bookmarklet_builder
# ron keizer 2014

use strict;
use warnings;
use URI::Escape qw(uri_escape_utf8);
 
open (INP, "<blendle.js"); 
my @lines = <INP>;
close INP;
my $src = join("", @lines);

# Zap the first line if there's already a bookmarklet comment:
$src =~ s{^// ?javascript:.+\n}{};
my $bookmarklet = $src;
 
$bookmarklet =~ s{^\s*//.+\n}{}gm;  # Kill comments.
$bookmarklet =~ s{\t}{ }gm;         # Tabs to spaces
$bookmarklet =~ s{ +}{ }gm;         # Space runs to one space
$bookmarklet =~ s{^\s+}{}gm;        # Kill line-leading whitespace
$bookmarklet =~ s{\s+$}{}gm;        # Kill line-ending whitespace
$bookmarklet =~ s{\n}{}gm;          # Kill newlines
 
# Escape single- and double-quotes, spaces, control chars, unicode:
$bookmarklet = "javascript:" .
    uri_escape_utf8($bookmarklet);
 
print "// $bookmarklet\n" ;
# . $src;
 
# Put bookmarklet on clipboard:
`/bin/echo -n '$bookmarklet' | /usr/bin/pbcopy`;