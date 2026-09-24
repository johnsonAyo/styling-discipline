"use client";

import { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Flex,
  Input,
  Label,
  Select,
  Separator,
  Stack,
  Switch,
  Text,
  Textarea,
  TONES,
  VARIANTS,
  SIZES,
} from "@sd/ui";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap="5">
      <Stack gap="1">
        <Text size="1" weight="medium" tone="muted" className="uppercase">
          {eyebrow}
        </Text>
        <Text as="div" size="4" weight="semibold" className="tracking-tight">
          {title}
        </Text>
      </Stack>
      {children}
      <Separator />
    </Stack>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Stack gap="2">
      <Text size="1" weight="medium" tone="muted">
        {label}
      </Text>
      <Flex gap="2" align="center" wrap>
        {children}
      </Flex>
    </Stack>
  );
}

export default function KitchenSinkPage() {
  const [on, setOn] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-accent-soft/50"
      />
      <Stack gap="9" p="6" className="relative mx-auto max-w-5xl py-12">
        <Flex justify="between" align="start" gap="4" wrap>
          <Stack gap="3" className="max-w-xl">
            <Badge tone="info" variant="soft" radius="full">
              props-only · 2026 materials
            </Badge>
            <Text as="div" size="4" weight="bold" className="tracking-tight">
              styling-discipline
            </Text>
            <Text tone="muted" size="3">
              Closed variant API with Geist and Linear visual language — near-black solids, soft
              elevations, accent focus rings. Agents style with props; tokens own the look.
            </Text>
            <Flex gap="2" wrap>
              <Button>Deploy project</Button>
              <Button variant="outline">Documentation</Button>
              <Button variant="ghost" tone="neutral">
                Changelog
              </Button>
            </Flex>
          </Stack>
          <Card variant="elevated" className="w-full max-w-xs">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Theme is a prop-level concern</CardDescription>
            </CardHeader>
            <CardContent>
              <Flex justify="between" align="center">
                <Text size="2">Dark mode</Text>
                <Switch checked={dark} onCheckedChange={setDark} />
              </Flex>
            </CardContent>
          </Card>
        </Flex>

        <Section eyebrow="01" title="Button">
          <Row label="tone × solid">
            {TONES.map((tone) => (
              <Button key={tone} tone={tone}>
                {tone}
              </Button>
            ))}
          </Row>
          <Row label="variant">
            {VARIANTS.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </Row>
          <Row label="size">
            {SIZES.map((size) => (
              <Button key={size} size={size}>
                size {size}
              </Button>
            ))}
          </Row>
          <Row label="loading / sections">
            <Button loading>Saving</Button>
            <Button leftSection={<span className="opacity-70">⌘</span>} rightSection={<span>↵</span>}>
              Command
            </Button>
          </Row>
        </Section>

        <Section eyebrow="02" title="Badge · Alert">
          <Row label="badges">
            {TONES.map((tone) => (
              <Badge key={tone} tone={tone} variant="soft">
                {tone}
              </Badge>
            ))}
          </Row>
          <Stack gap="2">
            <Alert tone="info">Deploy finished — preview is live on the edge.</Alert>
            <Alert tone="success" variant="soft">
              Checks passed. Ready to promote.
            </Alert>
            <Alert tone="danger" variant="outline">
              Payment method failed. Update billing to continue.
            </Alert>
          </Stack>
        </Section>

        <Section eyebrow="03" title="Surfaces">
          <Flex gap="4" wrap>
            <Card className="min-w-60 flex-1">
              <CardHeader>
                <CardTitle>Outline</CardTitle>
                <CardDescription>Border only, no lift</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="1" variant="outline">
                  Open
                </Button>
              </CardContent>
            </Card>
            <Card variant="elevated" className="min-w-60 flex-1">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
                <CardDescription>Material medium shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="1">Continue</Button>
              </CardContent>
            </Card>
            <Card tone="brand" variant="soft" className="min-w-60 flex-1">
              <CardHeader>
                <CardTitle>Soft brand</CardTitle>
                <CardDescription>Tinted surface</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="1">Upgrade</Button>
              </CardContent>
            </Card>
          </Flex>
        </Section>

        <Section eyebrow="04" title="Forms">
          <Stack gap="4" className="max-w-md">
            <Stack gap="1">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" placeholder="you@company.com" />
            </Stack>
            <Stack gap="1">
              <Label htmlFor="note">Message</Label>
              <Textarea id="note" placeholder="What should we ship?" />
            </Stack>
            <Stack gap="1">
              <Label htmlFor="plan">Plan</Label>
              <Select id="plan" defaultValue="pro">
                <option value="hobby">Hobby</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </Select>
            </Stack>
            <Flex gap="2" align="center">
              <Checkbox defaultChecked id="tos" />
              <Label htmlFor="tos">Email me product updates</Label>
            </Flex>
            <Flex gap="2" align="center">
              <Switch checked={on} onCheckedChange={setOn} />
              <Text size="2" tone="muted">
                Auto-deploy {on ? "on" : "off"}
              </Text>
            </Flex>
          </Stack>
        </Section>

        <Section eyebrow="05" title="Avatar">
          <Row label="tones">
            <Avatar fallback="SD" />
            <Avatar tone="brand" fallback="JB" />
            <Avatar size="4" tone="success" fallback="OK" />
            <Avatar size="3" tone="danger" fallback="!" />
          </Row>
        </Section>
      </Stack>
    </div>
  );
}
