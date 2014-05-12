use JSON;
use YAML::XS;

my $json = <<'...';
{
  "foo": "bar"
}
...

print Dump decode_json $json;
