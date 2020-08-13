// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text.Json;
using IdentityServer4;

namespace IdentityServerHost.Quickstart.UI
{
    public class TestUsers
    {
        public static List<TestUser> Users
        {
            get
            {
                return new List<TestUser>
                {
                    new TestUser
                    {
                        SubjectId = "818727",
                        Username = "joe",
                        Password = "joe",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.GivenName, "Joe"),
                            new Claim(JwtClaimTypes.FamilyName, "Ipe"),
                            new Claim(JwtClaimTypes.Address, "20/187 George St"),
                            new Claim(JwtClaimTypes.Role, "Admin"),
                            new Claim(JwtClaimTypes.Role, "User"),
                        }
                    },
                    new TestUser
                    {
                        SubjectId = "88421113",
                        Username = "ipe",
                        Password = "ipe",
                        Claims =
                        {
                            new Claim(JwtClaimTypes.GivenName, "Ipe"),
                            new Claim(JwtClaimTypes.FamilyName, "Joe"),
                            new Claim(JwtClaimTypes.Address, "Karappara Vettiyil, Vakathanam"),
                            new Claim(JwtClaimTypes.Role, "User"),
                        }
                    }
                };
            }
        }
    }
}