module.exports = {"name":"Networking","basePath":"/networking","description":"Networking endpoints provide a means of viewing <a href=\"#object-networking\"> networking objects</a>.\n","endpoints":[{"type":"list","authenticated":true,"description":"View and manage IPv4 Addresses you own.\n","methods":{"GET":{"oauth":"ips:view","description":"Returns a list of <a href=\"#object-ipaddress\">IPv4 Addresses</a>\n","examples":{"curl":"curl -H \"Authorization: token $TOKEN\" \\\n  https://api.alpha.linode.com/v4/networking/ipv4\n"}},"POST":{"money":true,"oauth":"ips:create","description":"Create a new Public <a href=\"#object-ipaddress\">IPv4 Address</a>\n","params":{"linode":{"description":"The Linode ID to assign this IP to.\n","type":"int"}},"examples":{"curl":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\"linode\":123}' \\\n    https://api.alpha.linode.com/v4/networking/ipv4\n"}}},"path":"networking/ipv4"},{"type":"resource","authenticated":true,"description":"Manage a single <a href=\"#object-ipaddress\">IPv4 Address</a>\n","methods":{"GET":{"oauth":"ips:get","description":"Returns a single <a href=\"#object-ipaddress\">IPv4 Address</a>\n","examples":{"curl":"curl -H \"Authorization: token $TOKEN\" \\\n  https://$api_root/$version/networking/ipv4/97.107.143.37\n"}},"PUT":{"oauth":"ips:modify","description":"Update RDNS on one <a href=\"#object-ipaddress\">IPv4 Address</a>.  Set RDNS to null to reset.\n","examples":{"curl":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X PUT -d '{\"rdns\":\"example.org\"}' \\\n    https://$api_root/$version/networking/ipv4/97.107.143.37\n"}}},"path":"networking/ipv4/:address"},{"type":"list","authenticated":true,"description":"Manage <a href=\"#object-ipv6pool\">IPv6 Global Pools</a>.\n","methods":{"GET":{"oauth":"ips:view","description":"Returns a list of <a href=\"#object-ipv6pool\">IPv6 Pools</a>.\n","examples":{"curl":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/networking/ipv6\n"}}},"path":"networking/ipv6"},{"type":"resource","authenticated":true,"description":"Manage a single <a href=\"#object-ipv6-address\">IPv6 Address</a>.  Address in URL can be as compressed as you want.\n","methods":{"GET":{"oauth":"ips:view","description":"Return a single <a href=\"#object-ipv6-address\">IPv6 Address</a>.\n","examples":{"curl":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/networkint/ipv6/2600:3c01::2:5001\n"}},"PUT":{"oauth":"ips:modify","description":"Set RDNS on a single <a href=\"#object-ipv6-address\">IPv6 Address</a>.\n","examples":{"curl":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X PUT -d '{\"rdns\":\"example.org\"}' \\\n    https://$api_root/$version/networking/ipv6/2600:3c01::2:5001\n"}}},"path":"networking/ipv6/:address"},{"type":"strange","authenticated":true,"description":"Assigns an IPv4 address to a Linode.\n","methods":{"POST":{"oauth":"linodes:access","dangerous":true,"params":{"datacenter":{"description":"The <a href=\"#object-datacenter\">datacenter</a> where the IPv4 address and Linode are located.\n","type":"datacenter"},"assignments":{"description":"An array of IPv4 addresses and the Linode IDs they will be assigned to\n","type":"array"}},"examples":{"curl":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\n        \"datacenter\": \"newark\",\n        \"assignments\": [\n          {\"address\": \"210.111.22.95\", \"linode_id\": 134504},\n          {\"address\": \"190.12.207.11\", \"linode_id\": 119034},\n        ]\n    }' \\\nhttps://$api_root/$version/networking/ip-assign\n"}}},"path":"networking/ip-assign"}]};